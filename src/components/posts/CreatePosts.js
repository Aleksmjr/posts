import { appendFabric } from '../../helpers';
import { getPosts } from '../../api/getPosts';
import { createElement } from '../../helpers';
import styles from '../posts/posts.module.scss';
import { Button } from '../../ui/button/button';
export default class Posts {
  postsData = [];
  currentIndex = 0;
  pageSize = 5;

  constructor(container) {
    this.container = container;
    this.init();
  }

  createPostCard(postsData) {
    const postDiv = createElement({
      tag: 'div',
      className: styles.posts__card,
    });
    const postBox = createElement({
      tag: 'div',
      className: styles.posts__group,
    });

    const postTitle = createElement({
      tag: 'h3',
      className: styles.posts__title,
    });
    const postBody = createElement({
      tag: 'p',
      className: styles.posts__text,
    });

    const postBtn = new Button({
      text: 'Watch post',
      className: styles.posts__btn,
      mod: 'primary',
      href: '#',
    });

    const imgWrapper = createElement({
      tag: 'div',
      className: `${styles.posts__imgWrapper} ${styles.skeleton}`,
    });
    const postImg = createElement({ tag: 'img', className: styles.post__img });

    postImg.style.opacity = 0;

    postImg.onload = () => {
      postImg.style.opacity = 1;
      imgWrapper.classList.remove(styles.skeleton);
    };

    postImg.src = postsData.photo;
    postTitle.textContent = postsData.title;
    postBody.textContent = postsData.body;
    appendFabric([
      [postBox, [postTitle, postBody, postBtn]],
      [postDiv, postBox],
      [imgWrapper, postImg],
      [postDiv, imgWrapper],
    ]);
    return postDiv;
  }

  createPosts() {
    const start = this.currentIndex;
    const end = this.currentIndex + this.pageSize;
    const showPosts = this.postsData.slice(start, end);

    showPosts.forEach((post) => {
      const card = this.createPostCard(post);
      this.container.appendChild(card);
    });

    this.currentIndex += showPosts.length;
  }

  createButtonLoadingMorePosts() {
    const section = document.querySelector('.posts');
    const loadMoreBtn = new Button({
      text: 'Load more...',
      className: styles.posts__loading,
      mod: 'secondary',
    });

    loadMoreBtn.addEventListener('click', () => this.createPosts());

    section.appendChild(loadMoreBtn);
  }

  async init() {
    this.postsData = await getPosts();
    this.createPosts();
    this.createButtonLoadingMorePosts();
  }
}
