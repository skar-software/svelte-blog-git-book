<script lang="ts">
  import ItemStore from '../stores/itemStore';
  import NavItem from './NavItem.svelte';

  // Filter parent items (those with no parent)
  $: parents = $ItemStore.filter(item => item.item_parent === null);
</script>

<div class="p-2 w-full">
  {#each parents as parentItem}
    <NavItem {parentItem} />
  {/each}
</div>
