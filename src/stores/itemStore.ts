import { writable } from 'svelte/store';

export type Item = {
  item_key: number;
  item_label: string;
  item_parent: number | null;
  item_ref_key: string;
  is_open: boolean;
};

const ItemStore = writable<Item[]>([
  { item_key: 1, item_label: 'All Blogs', item_parent: null, item_ref_key: 'list' },
  { item_key: 2, item_label: 'Child 1.1', item_parent: 1, item_ref_key: 'blogContent' },
  { item_key: 3, item_label: 'Child 1.2', item_parent: 1, item_ref_key: 'blogContent' },
  { item_key: 4, item_label: 'Parent 2', item_parent: null, item_ref_key: 'blogContent' },
  { item_key: 5, item_label: 'Child 2.1', item_parent: 4, item_ref_key: 'blogContent' }
])

export default ItemStore;
