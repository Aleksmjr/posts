import { createElement } from '../helpers/createElement';
import { appendFabric } from '../helpers/appendFabric';
import clsx from 'clsx';
import styles from '../components/posts/postList/posts.module.scss';
import PostList from '../components/posts/postList/PostList';
import { clearElement } from '../helpers/clearElement';

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
  }

  createSectionLayout() {
    this.section = createElement({ tag: 'section', className: 'posts' });
    this.title = createElement({ tag: 'h2', content: 'Posts' });
    this.container = createElement({
      tag: 'div',
      className: clsx('container', styles.posts__container),
    });
  }

  appendElements() {
    appendFabric([
      [this.section, this.container],
      [this.container, this.title],
      [this.root, this.section],
    ]);
  }

  async initPosts() {
    clearElement(this.root);
    this.createSectionLayout();
    this.appendElements();
    this.renderPostsWithButtonLoadMore();
  }
}
