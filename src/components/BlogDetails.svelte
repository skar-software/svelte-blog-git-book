<script lang="ts">
  import Blog from '../stores/blogStore'
  import { fetchBlog } from '../api/fetchBlog';
  import { onMount } from 'svelte';
  import Showdown from 'showdown';

  export let blog = typeof Blog;
  let content: string;

  $: (async () => {
    const resp = await fetchBlog(blog.blogKey + ".md");
    const converter = new Showdown.Converter();
    content = converter.makeHtml(resp.data);
  })();
</script>

<blog class="blog">
  <div class="image-container">
    <img src={`/images/${blog.image}`} alt={blog.label} class="blog-image" />
  </div>
  <div class="category-container">
    <span class="category">{blog.category}</span>
  </div>
  <div class="blog-details">
    <h1 class="blog-title">{blog.label}</h1>
    <p class="blog-date">{blog.publishedDate}</p>
    <div class="blog-content">
      {@html content}
    </div>
  </div>
</blog>

<style>
  .blog {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin: auto;
    padding: 16px;
  }

  .image-container {
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
  }

  .blog-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  .category-container {
    margin-top: 12px;
    display: flex;
    justify-content: flex-start;
  }

  .category {
    background-color: #ff8c00; /* Customize the color as needed */
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
  }

  .blog-details {
    margin-top: 16px;
  }

  .blog-title {
    font-size: 1.8rem; /* Adjusted for mobile screens */
    font-weight: bold;
    margin: 0;
    margin-bottom: 8px;
  }

  .blog-date {
    color: #888;
    font-size: 0.9rem; /* Adjusted for mobile screens */
    margin-bottom: 16px;
  }

  .blog-content {
    line-height: 1.6;
    font-size: 1rem; /* Use rem for relative sizing */
  }

  /* Mobile Styles */
  @media (max-width: 600px) {
    .blog {
      max-width: 100%;
      width: 100%;
      padding: 4px; /* Reduced padding on smaller screens */
    }

    .blog-image {
      width: 100%; /* Make blog image full width */
    }

    .blog-title {
      font-size: 1.6rem; /* Slightly smaller title for mobile */
    }

    .blog-date {
      font-size: 0.8rem; /* Smaller date text on mobile */
    }

    .category {
      font-size: 12px; /* Slightly smaller category tag */
    }

    .blog-content {
      font-size: 0.9rem; /* Adjust content font size for mobile */
    }
  }
</style>