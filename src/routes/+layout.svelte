<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
</script>

<div class="app flex w-full p-1">
	<div class="w-1/4">
    <NavBar />
  </div>
	<div class="w-3/4 flex-wrap">
		<main>
			<slot />
		</main>
	</div>
</div>

<style>
	.app {
		display: flex;
		background-color: white;
		min-height: 100vh;
	}

	main {
		display: flex;
		background-color: white;
		flex-direction: column;
		width: 100%;
		margin: 1 auto;
		box-sizing: border-box;
	}
</style>
