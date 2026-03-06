<script lang="ts">
	import logo from '$lib/assets/111.png';
	import cameraIcon from '$lib/assets/camera.png';

	let currentTime = new Date().toLocaleString();

	const liveStats = {
		personToday: 24,
		animalToday: 8,
		camerasOnline: 3,
		camerasTotal: 4,
		sackBoxTotal: 162,
		trucksToday: 4,
		trucksArrived: 3
	};

	setInterval(() => {
		currentTime = new Date().toLocaleString();
	}, 1000);
</script>

<svelte:head>
	<title>Dashboard - Atomo Innovation</title>
</svelte:head>

<div class="dashboard">
	<header class="header">
		<div class="header-left">
			<img src={logo} alt="Atomo Innovation Logo" class="header-logo" />
			<span class="company-name">Atomo Innovation Pvt. Ltd.</span>
		</div>
		<div class="header-right">
			<span class="live-badge">● Live</span>
			<span class="current-time">{currentTime}</span>
			<a href="/" class="logout-btn">Logout</a>
		</div>
	</header>

	<div class="twin-layout">
		<!-- LEFT: Detection tabs -->
		<aside class="detection-tabs">
			<h2 class="tabs-title">Detection</h2>
			<p class="tabs-hint">Click a module to view details. Digital twin on the right.</p>

			<a href="/dashboard/person" class="tab-card">
				<span class="tab-icon"><span class="tab-icon-emoji">👤</span></span>
				<div class="tab-info">
					<span class="tab-name">Person Detection</span>
					<span class="tab-stat">{liveStats.personToday} today</span>
				</div>
			</a>

			<a href="/dashboard/animal" class="tab-card">
				<span class="tab-icon"><span class="tab-icon-emoji">🐄</span></span>
				<div class="tab-info">
					<span class="tab-name">Animal Detection</span>
					<span class="tab-stat">{liveStats.animalToday} today</span>
				</div>
			</a>

			<a href="/dashboard/camera" class="tab-card">
				<span class="tab-icon"><img src={cameraIcon} alt="Camera" class="tab-icon-img" /></span>
				<div class="tab-info">
					<span class="tab-name">Camera Status</span>
					<span class="tab-stat">{liveStats.camerasOnline}/{liveStats.camerasTotal} online</span>
				</div>
			</a>

			<a href="/dashboard/sackbox" class="tab-card">
				<span class="tab-icon"><span class="tab-icon-emoji">📦</span></span>
				<div class="tab-info">
					<span class="tab-name">Sack/Box Counter</span>
					<span class="tab-stat">{liveStats.sackBoxTotal} counted</span>
				</div>
			</a>

			<a href="/dashboard/truck" class="tab-card">
				<span class="tab-icon"><span class="tab-icon-emoji">🚛</span></span>
				<div class="tab-info">
					<span class="tab-name">Truck Tracking</span>
					<span class="tab-stat">{liveStats.trucksArrived}/{liveStats.trucksToday} arrived</span>
				</div>
			</a>

			<div class="tabs-controls-hint">
				<strong>3D:</strong> WASD move · Drag orbit · Scroll zoom · Click camera for stream
			</div>
		</aside>

		<!-- Center border divider -->
		<div class="center-border" aria-hidden="true"></div>

		<!-- RIGHT: Digital twin -->
		<div class="twin-frame-wrap">
			<iframe
				title="3D Godown Digital Twin"
				src="/digital-twin.html"
				class="twin-iframe"
			></iframe>
		</div>
	</div>
</div>

<style>
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.dashboard {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background: #f5f7fa;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.header {
		background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
		color: white;
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	}

	.header-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.header-logo {
		height: 50px;
		width: auto;
	}

	.company-name {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.live-badge {
		font-size: 0.8rem;
		color: #34d399;
		font-weight: 600;
	}

	.current-time {
		font-size: 0.9rem;
		opacity: 0.9;
	}

	.logout-btn {
		background: #ef4444;
		color: white;
		border: none;
		padding: 8px 18px;
		border-radius: 6px;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.logout-btn:hover {
		background: #dc2626;
	}

	.twin-layout {
		display: flex;
		flex: 1;
		min-height: 0;
	}

	.detection-tabs {
		width: 280px;
		min-width: 280px;
		background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
		color: #e5e7eb;
		padding: 16px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 10px;
		border-right: 1px solid rgba(255, 255, 255, 0.12);
	}

	.center-border {
		width: 4px;
		min-width: 4px;
		background: linear-gradient(180deg, rgba(37, 99, 235, 0) 0%, rgba(37, 99, 235, 0.9) 50%, rgba(37, 99, 235, 0) 100%);
		flex-shrink: 0;
	}

	.tabs-title {
		font-size: 1.15rem;
		color: #ffffff;
		margin: 0 0 4px 0;
	}

	.tabs-hint {
		font-size: 0.8rem;
		color: rgba(229, 231, 235, 0.75);
		margin: 0 0 12px 0;
		line-height: 1.4;
	}

	.tab-card {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 14px;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.14);
		border-radius: 10px;
		text-decoration: none;
		color: inherit;
		transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
		box-shadow: 0 8px 20px rgba(2, 6, 23, 0.18);
	}

	.tab-card:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(52, 211, 153, 0.55);
		box-shadow: 0 14px 34px rgba(2, 6, 23, 0.25);
		transform: translateY(-1px);
	}

	.tab-icon {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.tab-icon-emoji {
		font-size: 1.75rem;
		line-height: 1;
	}

	.tab-icon-img {
		width: 34px;
		height: 34px;
		object-fit: contain;
		display: block;
	}

	.tab-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}

	.tab-name {
		font-size: 0.95rem;
		font-weight: 600;
		color: #ffffff;
	}

	.tab-stat {
		font-size: 0.8rem;
		color: rgba(52, 211, 153, 0.95);
	}

	.tabs-controls-hint {
		margin-top: auto;
		padding-top: 12px;
		font-size: 0.75rem;
		color: rgba(229, 231, 235, 0.65);
		line-height: 1.5;
		border-top: 1px solid rgba(255, 255, 255, 0.12);
	}

	.twin-frame-wrap {
		flex: 1;
		min-width: 0;
		position: relative;
		background: #ffffff;
	}

	.twin-iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
		display: block;
	}

	@media (max-width: 768px) {
		.twin-layout {
			flex-direction: column;
		}

		.center-border {
			width: 100%;
			min-width: 0;
			height: 4px;
			background: linear-gradient(90deg, rgba(37, 99, 235, 0) 0%, rgba(37, 99, 235, 0.9) 50%, rgba(37, 99, 235, 0) 100%);
		}

		.detection-tabs {
			width: 100%;
			min-width: 0;
			max-height: 38vh;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			gap: 8px;
		}

		.tabs-title {
			width: 100%;
			text-align: center;
		}

		.tabs-hint {
			width: 100%;
			text-align: center;
		}

		.tab-card {
			flex: 1 1 140px;
			min-width: 120px;
		}

		.tabs-controls-hint {
			width: 100%;
		}
	}
</style>
