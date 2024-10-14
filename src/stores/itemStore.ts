import { writable } from 'svelte/store';

export type Item = {
  item_key: number;
  item_label: string;
  item_parent: number | null;
  item_ref_key: string;
  is_open: boolean;
};

const ItemStore = writable<Item[]>([
  { "item_key": 1, "item_label": "Introduction", "item_parent": null, "item_ref_key": "jsContent" },
  { "item_key": 2, "item_label": "Tech Blogs", "item_parent": null, "item_ref_key": "tech" },
  { "item_key": 3, "item_label": "JavaScript", "item_parent": 2, "item_ref_key": "jsContent" },
  { "item_key": 4, "item_label": "React", "item_parent": 2, "item_ref_key": "reactContent" },
  { "item_key": 5, "item_label": "Svelte", "item_parent": 2, "item_ref_key": "svelteContent" },
  { "item_key": 6, "item_label": "Design Blogs", "item_parent": null, "item_ref_key": "design" },
  { "item_key": 7, "item_label": "UX Design", "item_parent": 6, "item_ref_key": "uxContent" },
  { "item_key": 8, "item_label": "UI Design", "item_parent": 6, "item_ref_key": "uiContent" },
  { "item_key": 9, "item_label": "Graphic Design", "item_parent": 6, "item_ref_key": "graphicContent" },
  { "item_key": 10, "item_label": "Blogs", "item_parent": null, "item_ref_key": "list" },
  { "item_key": 11, "item_label": "Parent without Children 2", "item_parent": null, "item_ref_key": "parent2" },
  { "item_key": 12, "item_label": "Parent without Children 3", "item_parent": null, "item_ref_key": "parent3" },
  { "item_key": 13, "item_label": "Advanced JavaScript", "item_parent": 3, "item_ref_key": "advancedJS" },  
  { "item_key": 14, "item_label": "Hooks in React", "item_parent": 4, "item_ref_key": "reactHooks" },
  { "item_key": 15, "item_label": "Advanced Hooks", "item_parent": 14, "item_ref_key": "advancedHooks" }
])

export default ItemStore;
