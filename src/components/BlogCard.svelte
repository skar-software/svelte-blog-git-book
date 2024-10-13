<script lang='ts'>
  import Card from '../shared/Card.svelte'
  export let blog;
</script>

<Card>
  <a class="no-underline" href="/blogs/{blog.blogKey}">
    <div class="image-container">
      <img src={`/images/${blog.image}`} alt={blog.label} class="blog-image" />
    </div>
    <div class="blog-details">
      <div class="blog-meta">
        <span class="blog-category">{blog.category}</span>
        <span class="blog-date">{blog.publishedDate}</span>
      </div>
      <h2 class="blog-title">{blog.label}</h2>
    </div>
  </a>
</Card>

<style>
  .image-container {
    width: 100%;
    height: 0;
    padding-bottom: 56%; /* 4:3 aspect ratio */
    position: relative;
  }

  .no-underline {
    text-decoration: none;
    color: inherit; /* Optional: This keeps the link color consistent with the surrounding text */
  }

  .blog-image {
    position: absolute;
    border-radius: 12px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill; /* Ensures the image covers the entire area while maintaining the aspect ratio */
  }

  .blog-details {
    padding: 16px;
  }

  .blog-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .blog-category {
    background-color: #ffe0b2;
    color: #ff8c00;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 20px;
  }

  .blog-date {
    font-size: 12px;
    color: #888;
  }

  .blog-title {
    font-size: 18px;
    color: #333;
    margin: 0;
    font-weight: bold;
  }
</style>