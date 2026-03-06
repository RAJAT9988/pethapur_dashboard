import express from 'express';
import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const STREAM_PORT = process.env.STREAM_PORT || 3001;

// RTSP stream URL for Manager Office camera (credentials in URL)
const MANAGER_OFFICE_RTSP = process.env.MANAGER_OFFICE_RTSP || 'rtsp://admin:admin123456@192.168.1.10:8554/profile0';

// Directory for HLS output (created if missing)
const STREAMS_DIR = path.join(__dirname, 'streams');
const MANAGER_OFFICE_STREAM_DIR = path.join(STREAMS_DIR, 'manager_office');

let ffmpegProcess = null;

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function startManagerOfficeStream() {
  ensureDir(STREAMS_DIR);
  ensureDir(MANAGER_OFFICE_STREAM_DIR);

  const args = [
    '-rtsp_transport', 'tcp',
    '-fflags', 'nobuffer+discardcorrupt',
    '-flags', 'low_delay',
    '-analyzeduration', '1000000',
    '-probesize', '1000000',
    '-i', MANAGER_OFFICE_RTSP,
    '-c', 'copy',
    '-f', 'hls',
    '-hls_time', '0.5',
    '-hls_list_size', '2',
    '-hls_flags', 'delete_segments+append_list+omit_endlist',
    '-hls_segment_filename', path.join(MANAGER_OFFICE_STREAM_DIR, 'segment_%03d.ts'),
    path.join(MANAGER_OFFICE_STREAM_DIR, 'index.m3u8')
  ];

  ffmpegProcess = spawn('ffmpeg', args, {
    stdio: ['ignore', 'pipe', 'pipe']
  });

  ffmpegProcess.stderr.on('data', (data) => {
    const msg = data.toString();
    if (msg.includes('error') || msg.includes('Error')) {
      console.error('[ffmpeg]', msg.trim());
    }
  });

  ffmpegProcess.on('close', (code) => {
    console.log('[ffmpeg] Manager office stream process exited with code', code);
    ffmpegProcess = null;
  });

  ffmpegProcess.on('error', (err) => {
    console.error('[ffmpeg] Failed to start:', err.message);
    console.error('Make sure ffmpeg is installed (apt install ffmpeg / brew install ffmpeg)');
  });

  console.log('Started RTSP -> HLS conversion for Manager Office camera');
}

// Serve HLS stream - no cache so player always gets latest segments
app.use('/stream/manager_office', (req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.set('Pragma', 'no-cache');
  next();
}, express.static(MANAGER_OFFICE_STREAM_DIR));

// Stream-only mode (dev): only serve /stream, used behind Vite proxy
const streamOnly = process.env.STREAM_ONLY === '1';
if (streamOnly) {
  app.use((req, res) => res.status(404).send('Not found'));
  app.listen(STREAM_PORT, () => {
    startManagerOfficeStream();
    console.log('Stream server running at http://localhost:' + STREAM_PORT);
    console.log('HLS: http://localhost:' + STREAM_PORT + '/stream/manager_office/index.m3u8');
    console.log('Run "npm run dev" in another terminal for the app.');
  });
} else {
  // Production: serve SvelteKit build + static
  const buildPath = path.join(__dirname, 'build');
  const staticPath = path.join(__dirname, 'static');

  if (fs.existsSync(buildPath)) {
    app.use(express.static(buildPath));
    app.get('*', (req, res) => {
      const p = path.join(buildPath, req.path);
      if (fs.existsSync(p) && fs.statSync(p).isFile()) return res.sendFile(p);
      res.sendFile(path.join(buildPath, 'index.html'));
    });
  } else {
    app.use(express.static(staticPath));
    app.use(express.static(__dirname));
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    startManagerOfficeStream();
    console.log('Server running at http://localhost:' + PORT);
    console.log('Manager Office HLS: http://localhost:' + PORT + '/stream/manager_office/index.m3u8');
  });
}
