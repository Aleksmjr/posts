import axios from 'axios';

export async function getPosts() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    const posts = response.data;

    return posts.map((post) => ({
      ...post,
      photo: `https://picsum.photos/400?random=${post.id}`,
    }));
  } catch (err) {
    console.error('Ошибка при загрузке постов:', err);
    return [];
  }
}
