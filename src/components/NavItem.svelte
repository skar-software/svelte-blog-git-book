<script lang="ts">
  import ItemStore from '../stores/itemStore';
  import { goto } from '$app/navigation'; 
  import type { Item } from '../stores/itemStore';
  import NavItem from './NavItem.svelte';
  export let parentItem: Item;

  // Get child items for the current parent item
  $: childItems = $ItemStore.filter(item => item.item_parent === parentItem.item_key);

  function toggleOpen() {
    parentItem.is_open = !parentItem.is_open;
  }

  function handleNavigate() {
    const blogContent = parentItem.item_ref_key;
    // Logic to navigate to the article or main page
    goto(`/blogs/${blogContent}`);
  }
</script>

<div>
  <div class="flex items-center">
    <button 
      class="flex-grow text-left font-bold focus:outline-none p-2 hover:bg-gray-200" 
      type="button" 
      on:click={handleNavigate}
    >
      {parentItem.item_label}
    </button>

    {#if childItems.length > 0}
      <button 
        class="p-2 focus:outline-none hover:bg-gray-200" 
        type="button" 
        on:click={toggleOpen} 
        aria-expanded={parentItem.is_open}
      >
        {parentItem.is_open ? '▼' : '▶'}
      </button>
    {/if}
  </div>

  <!-- Render child items below the parent if open -->
  {#if parentItem.is_open && childItems.length > 0}
    <div class="ml-6">
      {#each childItems as childItem}
        <NavItem parentItem={childItem} />
      {/each}
    </div>
  {/if}
</div>
