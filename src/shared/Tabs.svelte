<script>
  import { createEventDispatcher } from 'svelte';
  
  // import { Button, Card, Modal, ModalBody, ModalHeader } from "sveltestrap";
  export let items = []; // Array of items
  export let activeItem; // The currently active item

  const dispatch = createEventDispatcher();
</script>

<ul class="tab-list">
  {#each items as item}
    <li class="tab-item">
      <button 
        type="button"
        class:active={item === activeItem} 
        on:click={() => dispatch('tabChange', item)}
      >
        { item }
      </button>
    </li>
  {/each}
</ul>

<style>
  .tab-list {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .tab-item {
    margin-right: 10px;
  }

  .tab-item:last-child {
    margin-right: 0;
  }

  .tab-item button {
    padding: 10px 20px;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 12px;
    transition: background-color 0.3s ease;
  }

  .tab-item button.active {
    background-color: #ff8c00; /* Active item background color */
    color: white; /* Active item text color */
  }

  .tab-item button:not(.active) {
    background-color: #f0f0f0; /* Active item background color */
    color: black; /* Active item text color */
  }
</style>