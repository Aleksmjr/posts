import { Button } from '../../../ui/button/button';
import styles from './postCreateButton.module.scss';

export function postCreateButton() {
  const el = new Button({
    className: styles.posts__button,
    mod: 'plus',
    href: '#',
    icon: 'plus',
  });

  return el;
}
