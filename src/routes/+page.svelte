<script>
	import BlogList from '../components/BlogList.svelte'
  import BlogCategories from '../stores/blogCategoryStore';
	import Tabs from '../shared/Tabs.svelte'

	let categories = $BlogCategories;
  let activeCategory = "All";
  const tabChange = (e) => activeCategory = e.detail;
</script>

<main>
  <Tabs activeItem={activeCategory} items={categories} on:tabChange={tabChange} />
</main>
<BlogList {activeCategory}/>

<style>
	main{
    width: 100%;
    max-width: 100%;
    margin: 40px auto;
    padding: 10px;
  }
</style>
