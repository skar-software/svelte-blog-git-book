<script>
	import BlogList from '../components/BlogList.svelte'
  import BlogCategories from '../stores/blogCategoryStore';
	import Tabs from '../shared/Tabs.svelte'

	let categories = $BlogCategories;
  let activeCategory = "All";
  const tabChange = (e) => activeCategory = e.detail;
</script>

<main class="main">
  <Tabs activeItem={activeCategory} items={categories} on:tabChange={tabChange} />
  <BlogList {activeCategory}/>
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
