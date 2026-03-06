<script lang="ts">
	import logo from '$lib/assets/111.png';

	let name = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let loading = false;

	function handleSubmit(e: Event) {
		e.preventDefault();
		
		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}
		
		loading = true;
		// Add your signup logic here
		setTimeout(() => {
			loading = false;
			window.location.href = '/dashboard';
		}, 1000);
	}
</script>

<div class="signup-container">
	<div class="signup-card">
		<!-- Company Logo - Replace src with your actual logo path -->
		<div class="logo-container">
<img 
				src={logo} 
				alt="Company Logo" 
				class="logo"
			/>
		</div>

		<h1>Create Account</h1>
		<p class="subtitle">Sign up to get started</p>

		<form onsubmit={handleSubmit}>
			<div class="form-group">
				<label for="name">Full Name</label>
				<input
					type="text"
					id="name"
					bind:value={name}
					placeholder="Enter your full name"
					required
				/>
			</div>

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
					placeholder="Create a password"
					required
					minlength="6"
				/>
			</div>

			<div class="form-group">
				<label for="confirmPassword">Confirm Password</label>
				<input
					type="password"
					id="confirmPassword"
					bind:value={confirmPassword}
					placeholder="Confirm your password"
					required
				/>
			</div>

			<div class="terms">
				<label class="terms-checkbox">
					<input type="checkbox" required />
					<span>I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></span>
				</label>
			</div>

			<button type="submit" class="submit-btn" disabled={loading}>
				{#if loading}
					Creating Account...
				{:else}
					Sign Up
				{/if}
			</button>
		</form>

<p class="login-link">
			Already have an account? <a href="/">Log in</a>
		</p>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.signup-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}

	.signup-card {
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

	input[type="text"],
	input[type="email"],
	input[type="password"] {
		width: 100%;
		padding: 12px 16px;
		border: 2px solid #e1e5e9;
		border-radius: 6px;
		font-size: 16px;
		transition: border-color 0.3s ease;
	}

	input[type="text"]:focus,
	input[type="email"]:focus,
	input[type="password"]:focus {
		outline: none;
		border-color: #667eea;
	}

	.terms {
		margin-bottom: 24px;
	}

	.terms-checkbox {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		font-size: 13px;
		color: #666;
		cursor: pointer;
	}

	.terms-checkbox input {
		width: 16px;
		height: 16px;
		margin-top: 2px;
		cursor: pointer;
		flex-shrink: 0;
	}

	.terms-checkbox a {
		color: #667eea;
		text-decoration: none;
	}

	.terms-checkbox a:hover {
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

	.login-link {
		text-align: center;
		margin-top: 24px;
		color: #666;
		font-size: 14px;
	}

	.login-link a {
		color: #667eea;
		text-decoration: none;
		font-weight: 500;
	}

	.login-link a:hover {
		text-decoration: underline;
	}
</style>
