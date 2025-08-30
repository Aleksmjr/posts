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

    this.postsData = [...this.postsData, ...newPosts];
    return newPosts;
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
