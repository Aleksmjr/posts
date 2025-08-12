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
    { href: '/', text: 'About', attrs: { id: 'header-about-page' } },
    {
      href: '/contacts',
      text: 'Contacts',
      attrs: { id: 'header-contacts-page' },
    },
    { href: '/posts', text: 'Posts', attrs: { id: 'header-posts-page' } },
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
