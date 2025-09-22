import { createElement } from '../../../helpers';
import styles from '../postItem/postItem.module.scss';
import { appendFabric } from '../../../helpers';
import { Button } from '../../../ui/button/button';

export function createPostCard(postsData) {
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
