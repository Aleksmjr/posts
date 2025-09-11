import { getPosts } from '../../../api/postsService';
import { createElement } from '../../../helpers';
import { createPostCard } from '../postItem/postItem';
import { Button } from '../../../ui/button/button';
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

    this.loadMoreBtn = new Button({
      text: 'Load more...',
      className: styles.posts__loading,
      mod: 'secondary',
    });

    this.loadMoreBtn.addEventListener('click', async () => {
      this.currentPage += 1;
      const newPosts = await this.getPostsData();
      await this.createPostsList(newPosts);
    });
  }

  async getPostsData() {
    const newPosts = await getPosts({
      limit: this.pageSize,
      page: this.currentPage,
    });
    const enhancedPosts = this.addPhotosToPosts(newPosts);
    this.postsData = [...this.postsData, ...enhancedPosts];
    return enhancedPosts;
  }

  addPhotosToPosts(posts) {
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
    this.createLoadMoreButton();
  }

  async loadNextPage() {
    this.currentPage += 1;
    const newPosts = await this.getPostsData();
    await this.createPostsList(newPosts);
  }

  createLoadMoreButton() {
    const loadMoreBtn = new Button({
      text: 'Load more...',
      className: styles.posts__loading,
      mod: 'secondary',
    });

    loadMoreBtn.addEventListener('click', () => this.loadNextPage());
    this.container.appendChild(loadMoreBtn);
  }

  async init() {
    const firstPosts = await this.getPostsData();
    await this.createPostsList(firstPosts);
  }
}
