import { createElement } from '../helpers/createElement';
import { appendFabric } from '../helpers/appendFabric';
import clsx from 'clsx';
import styles from '../components/posts/postList/posts.module.scss';
import { createButtonLoadingMorePosts } from '../components/posts/postLoadingButton/postLoadingButton';
import PostList from '../components/posts/postList/PostList';

export async function createPostsPage() {
  new PostPage();
}

export class PostPage {
  root = document.getElementById('page-content');
  constructor() {
    if (!this.root) {
      return;
    }
    this.initPosts();
  }

  async renderPostsWithButtonLoadMore() {
    this.newPostLists = new PostList(this.container);
    await this.newPostLists.init();
    await this.newPostLists.mount();
    createButtonLoadingMorePosts(this.container, this.newPostLists);
  }

  createSectionLayout() {
    this.section = createElement({ tag: 'section', className: 'posts' });
    this.title = createElement({ tag: 'h2', content: 'Posts' });
    this.container = createElement({
      tag: 'div',
      className: clsx('container', styles.posts__container),
    });
  }

  clearRoot() {
    this.root.innerHTML = '';
  }

  appendElements() {
    appendFabric([
      [this.section, this.container],
      [this.container, this.title],
      [this.root, this.section],
    ]);
  }

  async initPosts() {
    this.clearRoot();
    this.createSectionLayout();
    this.appendElements();
    this.renderPostsWithButtonLoadMore();
  }
}
