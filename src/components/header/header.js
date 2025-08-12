import { createElement } from '../../helpers/createElement';
import styles from './header.module.scss';
import { Button } from '../../ui/button/button';
import clsx from 'clsx';

export function createHeader() {
  const header = createElement({ tag: 'header', className: styles.header });
  const container = createElement({
    tag: 'div',
    className: clsx(styles.header__container, 'container'),
  });

  const logo = createElement({
    tag: 'a',
    className: styles.header__logo,
    href: '/',
  });

  const nav = createElement({ tag: 'nav', className: styles.header__nav });

  [
    { href: '/', text: 'About' },
    { href: '/contacts', text: 'Contacts' },
    { href: '/posts', text: 'Posts' },
  ]
    .map(
      (item) =>
        new Button({
          ...item,
          classNames: styles.header__link,
          mod: 'header',
        }),
    )
    .forEach((el) => nav.appendChild(el));

  const signUser = new Button({
    text: 'Sign',
    className: 'header__sign',
    mod: 'header',
    href: '#',
    onClick: () => {
      console.log('я буду переходить в личный кабинет');
    },
  });
  container.appendChild(logo);
  container.appendChild(nav);
  container.appendChild(signUser);
  header.appendChild(container);

  return header;
}
