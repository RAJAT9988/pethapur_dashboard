<script lang="ts">
	import logo from '$lib/assets/111.png';
	import detectionImage from '$lib/assets/WhatsApp Image 2026-02-05 at 3.35.13 PM.jpeg';

	const sackBoxData = [
		{ id: 1, type: 'Item', count: 162, image: detectionImage, timestamp: '2024-01-15 10:00:00', zone: 'Zone A' },
	];

	let currentTime = new Date().toLocaleString();
</script>

<svelte:head>
	<title>Sack/Box Counter - Atomo Innovation</title>
</svelte:head>

<div class="page-container">
	<header class="header">
		<div class="header-left">
			<a href="/dashboard" class="back-btn">← Back</a>
			<img src={logo} alt="Atomo Innovation Logo" class="header-logo" />
			<span class="company-name">Atomo Innovation Pvt. Ltd.</span>
		</div>
		<div class="header-right">
			<span class="current-time">{currentTime}</span>
			<a href="/" class="logout-btn">Logout</a>
		</div>
	</header>

	<main class="main-content">
		<h1 class="page-title">Sack/Box Counter</h1>
		
		<div class="card-grid">
			{#each sackBoxData as item}
				<div class="card">
					<div class="card-image">
						<img src={item.image} alt={item.type} />
					</div>
					<div class="card-details">
						<h3>{item.type} Counter</h3>
						<p class="count-display">{item.count} {item.type}s</p>
						<p><strong>Timestamp:</strong> {item.timestamp}</p>
						<p><strong>Zone:</strong> {item.zone}</p>
					</div>
				</div>
			{/each}
		</div>
	</main>

	<footer class="footer">
		<p>&copy; 2024 Atomo Innovation Pvt. Ltd. All rights reserved.</p>
	</footer>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.page-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: #f5f7fa;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.header {
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
		color: white;
		padding: 15px 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.header-left {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.back-btn {
		background: rgba(255, 255, 255, 0.1);
		color: white;
		padding: 8px 16px;
		border-radius: 5px;
		text-decoration: none;
		font-size: 0.9rem;
		transition: background 0.3s ease;
	}

	.back-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.header-logo {
		height: 50px;
		width: auto;
	}

	.company-name {
		font-size: 1.2rem;
		font-weight: 600;
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.current-time {
		font-size: 0.9rem;
		opacity: 0.8;
	}

	.logout-btn {
		background: #e74c3c;
		color: white;
		padding: 8px 20px;
		border-radius: 5px;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.main-content {
		flex: 1;
		padding: 30px;
		max-width: 1400px;
		margin: 0 auto;
		width: 100%;
	}

	.page-title {
		font-size: 2rem;
		color: #2c3e50;
		margin-bottom: 25px;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 25px;
	}

	.card {
		background: white;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}

	.card-image {
		width: 100%;
		height: 180px;
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card-details {
		padding: 20px;
	}

	.card-details h3 {
		font-size: 1.2rem;
		color: #2c3e50;
		margin-bottom: 10px;
	}

	.card-details p {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 5px;
	}

	.count-display {
		font-size: 2rem;
		font-weight: 700;
		color: #667eea;
		margin: 15px 0;
	}

	.footer {
		background: #1a1a2e;
		color: white;
		padding: 20px;
		text-align: center;
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			gap: 15px;
		}

		.header-left {
			flex-direction: column;
		}

		.main-content {
			padding: 15px;
		}

		.page-title {
			font-size: 1.5rem;
		}
	}
</style>
