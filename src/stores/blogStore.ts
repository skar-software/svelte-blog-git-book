import { writable } from 'svelte/store';

export type Blog = {
  id: string;
  label: string;
  publishedDate: string;
  image: string;
  blogKey: string,
  category: string;
};

// Create and export the BlogStore as a writable store
const BlogStore = writable<Blog[]>([
  {
    id: '1',
    label: 'MXN is Now Available on the Conduit Platform!',
    publishedDate: 'Jul 23, 2024',
    image: 'image1.jpg',
    blogKey: 'blogContent',
    category: 'Announcements'
  },
  {
    id: '2',
    label: 'How to Scale Your Application with Kubernetes',
    publishedDate: 'Aug 01, 2024',
    image: 'image1.jpg',
    blogKey: 'blogContent',
    category: 'Technology'
  },
  {
    id: '3',
    label: 'Understanding the Basics of AI and Machine Learning',
    publishedDate: 'Aug 15, 2024',
    image: 'image2.jpg',
    blogKey: 'blogContent',
    category: 'Education'
  },
  {
    id: '4',
    label: 'Top 10 JavaScript Frameworks to Learn in 2024',
    publishedDate: 'Jul 30, 2024',
    image: 'image3.jpg',
    blogKey: 'jsContent',
    category: 'Development'
  },
  {
    id: '5',
    label: 'React Blog',
    publishedDate: 'Aug 10, 2024',
    image: 'image2.jpg',
    blogKey: 'reactContent',
    category: 'Technology'
  },
  {
    id: '6',
    label: '5 Tips for Better UX Design in 2024',
    publishedDate: 'Jul 25, 2024',
    image: 'image3.jpg',
    blogKey: 'svelteContent',
    category: 'Design'
  },
  {
    id: '7',
    label: 'Exploring the New Features in Python 3.11',
    publishedDate: 'Aug 05, 2024',
    image: 'image1.jpg',
    blogKey: 'blogContent',
    category: 'Programming'
  },
  {
    id: '8',
    label: 'Tech Reads',
    publishedDate: 'Jul 28, 2024',
    image: 'image3.jpg',
    blogKey: 'tech',
    category: 'Technology'
  },
  {
    id: '9',
    label: '10 Best Practices for Writing Clean Code',
    publishedDate: 'Aug 18, 2024',
    image: 'image1.jpg',
    blogKey: 'blogContent',
    category: 'Development'
  },
  {
    id: '10',
    label: 'An Introduction to DevOps and CI/CD',
    publishedDate: 'Jul 22, 2024',
    image: 'image2.jpg',
    blogKey: 'blogContent',
    category: 'DevOps'
  }
]);

export default BlogStore;
