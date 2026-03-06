<script lang="ts">
	import logo from '$lib/assets/111.png';
	import detectionImage from '$lib/assets/truck.png';

	const truckData = [
		{ id: 1, truckNumber: 'MH-12-AB-1234', expectedTime: '08:00 AM', actualTime: '08:15 AM', status: 'Arrived', date: '2024-01-15', image: detectionImage },
		{ id: 2, truckNumber: 'MH-12-CD-5678', expectedTime: '10:00 AM', actualTime: '-', status: 'Not Arrived', date: '2024-01-15', image: detectionImage },
		{ id: 3, truckNumber: 'MH-12-EF-9012', expectedTime: '02:00 PM', actualTime: '01:55 PM', status: 'Arrived', date: '2024-01-15', image: detectionImage },
		{ id: 4, truckNumber: 'MH-12-GH-3456', expectedTime: '04:00 PM', actualTime: '-', status: 'Delayed', date: '2024-01-15', image: detectionImage },
	];

	let currentTime = new Date().toLocaleString();
</script>

<svelte:head>
	<title>Truck Tracking - Atomo Innovation</title>
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
		<h1 class="page-title">Truck Tracking</h1>
		
		<div class="table-container">
			<table class="data-table">
				<thead>
					<tr>
						<th>Detected Image</th>
						<th>Truck Number</th>
						<th>Expected Time</th>
						<th>Actual Time</th>
						<th>Status</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{#each truckData as truck}
						<tr class="{truck.status === 'Not Arrived' ? 'not-arrived' : ''} {truck.status === 'Delayed' ? 'delayed' : ''}">
							<td class="thumb-cell">
								<img src={truck.image} alt="Truck {truck.truckNumber}" class="detected-thumb" />
							</td>
							<td>{truck.truckNumber}</td>
							<td>{truck.expectedTime}</td>
							<td>{truck.actualTime}</td>
							<td>
								<span class="status-badge {truck.status.toLowerCase().replace(' ', '-')}">
									{truck.status}
								</span>
							</td>
							<td>{truck.date}</td>
						</tr>
					{/each}
				</tbody>
			</table>
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

	.table-container {
		overflow-x: auto;
		background: white;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}

	.data-table {
		width: 100%;
		border-collapse: collapse;
	}

	.data-table th,
	.data-table td {
		padding: 15px;
		text-align: left;
		border-bottom: 1px solid #f0f0f0;
	}

	.data-table th {
		background: #f8f9fa;
		font-weight: 600;
		color: #2c3e50;
		font-size: 0.9rem;
		text-transform: uppercase;
	}

	.data-table td {
		color: #555;
	}

	.data-table tbody tr:hover {
		background: #f8f9fa;
	}

	.thumb-cell {
		width: 120px;
		padding: 8px !important;
	}

	.detected-thumb {
		width: 100px;
		height: 70px;
		object-fit: cover;
		border-radius: 6px;
		display: block;
	}

	.not-arrived {
		background: #fff8e6 !important;
	}

	.delayed {
		background: #fff0f0 !important;
	}

	.status-badge {
		display: inline-block;
		padding: 5px 12px;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 500;
	}

	.status-badge.arrived {
		background: #d4edda;
		color: #155724;
	}

	.status-badge.not-arrived {
		background: #f8d7da;
		color: #721c24;
	}

	.status-badge.delayed {
		background: #fff3cd;
		color: #856404;
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
