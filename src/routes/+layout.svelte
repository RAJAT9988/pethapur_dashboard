<script lang="ts">
	import favicon from '$lib/assets/111.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Login</title>
</svelte:head>

{@render children()}
