<script lang="ts">
	import logo from '$lib/assets/111.png';

	let email = '';
	let password = '';
	let loading = false;

	function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		// Add your login logic here
		setTimeout(() => {
			loading = false;
			window.location.href = '/dashboard';
		}, 1000);
	}
</script>

<div class="login-container">
	<div class="login-card">
		<!-- Company Logo - Replace src with your actual logo path -->
		<div class="logo-container">
<img 
				src={logo} 
				alt="Company Logo" 
				class="logo"
			/>
		</div>

		<h1>Welcome Back</h1>
		<p class="subtitle">Sign in to your account</p>

		<form onsubmit={handleSubmit}>
			<div class="form-group">
				<label for="email">Email</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					placeholder="Enter your email"
					required
				/>
			</div>

			<div class="form-group">
				<label for="password">Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					placeholder="Enter your password"
					required
				/>
			</div>

			<div class="form-options">
				<label class="remember-me">
					<input type="checkbox" />
					<span>Remember me</span>
				</label>
				<a href="/forgot-password" class="forgot-password">Forgot password?</a>
			</div>

			<button type="submit" class="submit-btn" disabled={loading}>
				{#if loading}
					Signing in...
				{:else}
					Sign In
				{/if}
			</button>
		</form>

		<p class="signup-link">
			Don't have an account? <a href="/signup">Sign up</a>
		</p>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.login-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}

	.login-card {
		background: white;
		border-radius: 10px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
		padding: 40px;
		width: 100%;
		max-width: 420px;
	}

	.logo-container {
		text-align: center;
		margin-bottom: 30px;
	}

	.logo {
		max-width: 200px;
		max-height: 100px;
		object-fit: contain;
	}

	h1 {
		text-align: center;
		color: #333;
		font-size: 28px;
		margin-bottom: 8px;
	}

	.subtitle {
		text-align: center;
		color: #666;
		margin-bottom: 30px;
		font-size: 14px;
	}

	.form-group {
		margin-bottom: 20px;
	}

	label {
		display: block;
		margin-bottom: 8px;
		color: #555;
		font-weight: 500;
		font-size: 14px;
	}

	input[type="email"],
	input[type="password"] {
		width: 100%;
		padding: 12px 16px;
		border: 2px solid #e1e5e9;
		border-radius: 6px;
		font-size: 16px;
		transition: border-color 0.3s ease;
	}

	input[type="email"]:focus,
	input[type="password"]:focus {
		outline: none;
		border-color: #667eea;
	}

	.form-options {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;
	}

	.remember-me {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
		cursor: pointer;
	}

	.remember-me input {
		width: 16px;
		height: 16px;
		cursor: pointer;
	}

	.forgot-password {
		color: #667eea;
		text-decoration: none;
		font-size: 14px;
	}

	.forgot-password:hover {
		text-decoration: underline;
	}

	.submit-btn {
		width: 100%;
		padding: 14px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		border-radius: 6px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: opacity 0.3s ease;
	}

	.submit-btn:hover {
		opacity: 0.9;
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.signup-link {
		text-align: center;
		margin-top: 24px;
		color: #666;
		font-size: 14px;
	}

	.signup-link a {
		color: #667eea;
		text-decoration: none;
		font-weight: 500;
	}

	.signup-link a:hover {
		text-decoration: underline;
	}
</style>
