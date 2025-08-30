import { apiRequest } from './api';

export async function getPosts({ limit = 5, page = 1 } = {}) {
  const allPosts = await apiRequest('posts');
  const start = (page - 1) * limit;
  const end = start + limit;
  const posts = allPosts.slice(start, end);

  return posts.map((post) => ({
    ...post,
    photo: `https://picsum.photos/400?random=${post.id}`,
  }));
}
