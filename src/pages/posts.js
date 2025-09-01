// создает содержимое внутри main, не имея отношения к header и footer
// класс, который наследуется от pages (генерит новую разметку). При этом роутинг должен найти див рут и запихать туда этот эбаут. Определить роутинг можно через массив роутов, где каждый роут - это объект с полями path и component.
import { createElement } from '../helpers/createElement';
import { appendFabric } from '../helpers/appendFabric';
import clsx from 'clsx';
import styles from '../components/posts/postList/posts.module.scss';
import { createButtonLoadingMorePosts } from '../components/posts/postLoadingButton/postLoadingButton';
import PostList from '../components/posts/postList/PostList';
export async function createPostsPage() {
  const root = document.getElementById('page-content');
  root.innerHTML = '';
  const section = createElement({ tag: 'section', className: 'posts' });
  const container = createElement({
    tag: 'div',
    className: clsx('container', styles.posts__container),
  });
  const title = createElement({ tag: 'h2', content: 'Posts' });
  const newPostLists = new PostList(container);

  appendFabric([
    [section, container],
    [container, title],
    [root, section],
  ]);
  await newPostLists.init();
  await newPostLists.mount();
  createButtonLoadingMorePosts(container, newPostLists);
}
