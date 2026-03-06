# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv create --template minimal --types ts --add prettier --install npm godown
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Backend (camera streams)

The app can use a small Express server that converts RTSP to HLS so the digital twin can show live camera streams.

**Requirements:** [ffmpeg](https://ffmpeg.org/) installed (`apt install ffmpeg` or `brew install ffmpeg`).

### Development (app + stream)

1. **Terminal 1 – stream server** (HLS from RTSP):
   ```sh
   npm run dev:stream
   ```
   Runs the stream server on port **3001**. It pulls `MANAGER_OFFICE_RTSP` (default `rtsp://admin:admin123456@192.168.1.10:8554/profile0`) and serves HLS at `/stream/manager_office/index.m3u8`.

2. **Terminal 2 – app**:
   ```sh
   npm run dev
   ```
   Vite runs on port **5173** and proxies `/stream` to the stream server. Open http://localhost:5173, go to the dashboard, and in the digital twin click the Manager Office camera to open the live stream.

To use another RTSP URL:
```sh
MANAGER_OFFICE_RTSP=rtsp://user:pass@host:554/path npm run dev:stream
```

### Production (single server)

```sh
npm run build
npm run start
```

This is intended for **local/self-hosting** only (not Vercel). `server.js` runs Express on port **3000** and starts ffmpeg to generate an HLS stream.

If you want to self-host with this single-server setup, you may want to switch the adapter back to `@sveltejs/adapter-static` so `server.js` can serve the generated static build.

## Deploying on Vercel

This project is configured to deploy on **Vercel** using the SvelteKit Vercel adapter.

- **Build command**: `npm run build`
- **Dev command** (local): `npm run dev`

### Important note about camera streaming on Vercel

The RTSP→HLS stream server in `server.js` uses **ffmpeg** + local filesystem writes. That **won’t run on Vercel serverless functions**.

For Vercel deployments:
- Keep the app UI and the digital twin.
- For live streams, use an external streaming service (e.g. MediaMTX / HLS proxy) and set URLs in `static/digital-twin.html` (`CAMERA_STREAM_URLS`).

### Optional: MediaMTX (WebRTC)

For WebRTC (WHEP) instead of HLS, use [MediaMTX](https://github.com/bluenviron/mediamtx) with the included `mediamtx.yml`:

```sh
./mediamtx mediamtx.yml
```

Then set the camera URL in `static/digital-twin.html` to `http://localhost:8889/manager_office/whep` for that camera.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
# pethapur_dashboard
