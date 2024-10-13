<script lang="ts">
  import BlogStore from '../stores/blogStore';
  import BlogCard from './BlogCard.svelte';
  import BlogCategories from '../stores/blogCategoryStore';
  import Tabs from '../shared/Tabs.svelte';

  let categories = $BlogCategories;
  let activeCategory = "All";
  const tabChange = (e) => activeCategory = e.detail;
  $: filteredBlogs = $BlogStore.filter(blog => blog.category === activeCategory || activeCategory === 'All');
</script>

<Tabs activeItem={activeCategory} items={categories} on:tabChange={tabChange} />
<div class="blog-list p-1">
  {#each filteredBlogs as blog}
    <BlogCard {blog} />
  {/each}
</div>

<style>
  .blog-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  /* Medium screens (2 cards) */
  @media (max-width: 900px) {
    .blog-list {
        grid-template-columns: repeat(2, 1fr); /* 2 columns */
    }
  }

    /* Small screens (1 card) */
  @media (max-width: 600px) {
    .blog-list {
        grid-template-columns: 1fr; /* 1 column */
    }
  }
</style>