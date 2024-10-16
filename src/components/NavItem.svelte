<script lang="ts">
  import ItemStore from '../stores/itemStore';
  import { activeItemStore } from '../stores/itemStore';
  import { get } from 'svelte/store'; // To retrieve store value
  import { goto } from '$app/navigation'; 
  import type { Item } from '../stores/itemStore';
  import NavItem from './NavItem.svelte';
  import { onDestroy } from 'svelte';
  export let parentItem: Item;

  let activeItem: number = 0;
  let activeParents: number[] = [];
  const unsubscribe = activeItemStore.subscribe(activeData => {
    if (activeData) {
      activeItem = activeData.activeItem;
      activeParents = activeData.activeParents || [];
    }
  });
  onDestroy(() => {
    unsubscribe();
  });

  // Get child items for the current parent item
  $: childItems = $ItemStore.filter(item => item.item_parent === parentItem.item_key);

  function toggleOpen() {
    parentItem.is_open = !parentItem.is_open;
  }

  function handleNavigate() {
    const blogContent = parentItem.item_ref_key;
    // Logic to navigate to the article or main page

    const articleItemKey = parentItem.item_key;
    const activeItemParents = findParentHierarchy(parentItem);
    activeItemStore.set({ activeItem: articleItemKey, activeParents: activeItemParents });
    goto(`/blogs/${blogContent}`);
  }

  function findParentHierarchy(item) {
    let parents = [];
    let currentItem = item;
    while (currentItem && currentItem.item_parent) {
      const parent = $ItemStore.find(i => i.item_key === currentItem.item_parent);
      if (parent) {
        parents.push(parent.item_key);
        currentItem = parent;
      } else {
        break;
      }
    }
    return parents;
  };
</script>

<div>
  <div class="flex items-center">
    <button 
      class="flex-grow text-left p-2 focus:outline-none hover:bg-gray-200"
      class:bg-gray-200={activeItem === parentItem.item_key || activeParents.includes(parentItem.item_key)}
      class:text-blue-700={activeItem === parentItem.item_key || activeParents.includes(parentItem.item_key)}
      class:text-gray-900={!activeItem || (activeItem !== parentItem.item_key && !activeParents.includes(parentItem.item_key))}
      type="button" 
      on:click={handleNavigate}
    >
      {parentItem.item_label}
    </button>

    {#if childItems.length > 0}
      <button 
        class="p-2 focus:outline-none hover:bg-gray-200"
        class:bg-gray-200={activeItem === parentItem.item_key || activeParents.includes(parentItem.item_key)}
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
