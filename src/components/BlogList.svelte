<script lang="ts">
  import BlogStore from '../stores/blogStore';
  import BlogCard from './BlogCard.svelte';

  export let activeCategory;

  $: filteredBlogs = $BlogStore.filter(blog => blog.category === activeCategory || activeCategory === 'All');
</script>

<div class="blog-list">
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
</style>