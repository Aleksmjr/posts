import { Button } from '../../../ui/button/button';
import styles from '../postLoadingButton/postLoadingButton.module.scss';

export function createButtonLoadingMorePosts(container, postList) {
  const loadMoreBtn = new Button({
    text: 'Load more...',
    className: styles.posts__loading,
    mod: 'secondary',
  });

  loadMoreBtn.addEventListener('click', async () => {
    postList.currentPage += 1;
    const newPosts = await postList.getPostsData();
    await postList.createPostsList(newPosts);
  });
  container.append(loadMoreBtn);
}
