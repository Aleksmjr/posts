import { Button } from '../../../ui/button/button';
import styles from './postCreateButton.module.scss';
import createPostModal from '../../modals/createPostModal/createPostModal';

export function postCreateButton() {
  const modal = new createPostModal();

  const el = new Button({
    className: styles.posts__button,
    mod: 'plus',
    href: '#',
    icon: 'plus',
    onClick: (e) => {
      e.preventDefault();
      modal.open();
    },
  });

  return el;
}
