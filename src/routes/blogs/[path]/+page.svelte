<script lang="ts">
  import { page } from '$app/stores';
  import BlogStore from '../../../stores/blogStore';
  import Blog from '../../../stores/blogStore';
  import { onMount } from 'svelte';
  import BlogDetails from '../../../components/BlogDetails.svelte';
    import BlogList from '../../../components/BlogList.svelte';

  let path = "";
  let blogFound: boolean = false; // Flag to indicate if a blog was found
  let blog: typeof Blog | undefined;

  $: params = $page.params;

  $: (async () => {
    path = params.path;
    console.log(path); 
    let blogs;
    blogs = $BlogStore.filter(blog => blog.blogKey === path);

    if (blogs.length > 0) {
      blogFound = true;
      blog = blogs[0];
    }
  })();
</script>

<blog>
  {#if path == "list"}
    <BlogList/>
  {:else if blogFound && blog}
    <BlogDetails {blog}/>
  {:else}
    <div>
      <h1>404 - Blog Not Found</h1>
      <p>Sorry, the blog you're looking for does not exist.</p>
    </div>
  {/if}
</blog>