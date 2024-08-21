<script>
	import '../app.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		background-color: white;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		background-color: white;
		flex-direction: column;
		padding-top: 1rem;
		padding-left: 10rem;
		padding-right: 10rem;
		padding-bottom: 1rem;
		width: 100%;
		margin: 1 auto;
		box-sizing: border-box;
	}
</style>
