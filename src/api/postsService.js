import { apiRequest } from './api';

export async function getPosts({ limit = 5, page = 1 } = {}) {
  const posts = await apiRequest('posts', {
    _limit: limit,
    _page: page,
  });

  return posts.map((post) => ({
    ...post,
    photo: `https://picsum.photos/400?random=${post.id}`,
  }));
}
