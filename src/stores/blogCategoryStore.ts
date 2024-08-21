import { writable } from 'svelte/store';
const BlogCategories = writable<string[]>(
  [
    "All", "Announcements", "Technology", 'Education', 'Development',
    'Design', 'Programming', 'DevOps'
  ]
)

export default BlogCategories;