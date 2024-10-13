<script>
	import BlogList from '../components/BlogList.svelte'
</script>

<main class="main">
  <BlogList/>
</main>

<style>
	.main{
    width: 100%;
    max-width: 100%;
    margin: 10px auto;
    padding: 10px;
  }

  @media (max-width: 600) {
    .main {
        width: 100%;
        margin: 4 auto;
        max-width: 100%;
    }
  }
</style>
