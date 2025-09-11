import { getPosts } from '../../../api/postsService';
import { createElement } from '../../../helpers';
import { createPostCard } from '../postItem/postItem';
import styles from './posts.module.scss';

export default class PostList {
  postsData = [];
  currentPage = 1;
  pageSize = 5;

  constructor(container) {
    this.container = container;
    this.postWrapper = createElement({
      tag: 'div',
      className: styles.posts__wrapper,
    });
  }

  async getPostsData() {
    const newPosts = await getPosts({
      limit: this.pageSize,
      page: this.currentPage,
    });
    const enhancedPosts = this.createPhotoInPost(newPosts);
    this.postsData = [...this.postsData, ...enhancedPosts];
    return enhancedPosts;
  }

  createPhotoInPost(posts) {
    return posts.map((post) => ({
      ...post,
      photo: `https://picsum.photos/400?random=${post.id}`,
    }));
  }

  async createPostsList(posts) {
    posts.forEach((postData) => {
      this.postWrapper.append(createPostCard(postData));
    });
  }

  async mount() {
    this.container.appendChild(this.postWrapper);
  }

  async init() {
    const firstPosts = await this.getPostsData();
    await this.createPostsList(firstPosts);
  }
}
