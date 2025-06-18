import { createElement } from '../../helpers/createElement';

export function createHeader() {
  const header = createElement({ tag: 'header', className: 'header' });
  const container = createElement({ tag: 'div', className: 'container' });

  const navItems = [
    { text: 'Главная', href: '/' },
    { text: 'О нас', href: '/about' },
    { text: 'Посты', href: '/posts' },
    { text: 'Блог', href: '/blog' },
  ];

  const nav = createElement({ tag: 'nav', className: 'header__nav' });

  navItems.forEach((item) => {
    nav.appendChild(
      createElement({
        tag: 'a',
        className: 'header__link',
        content: item.text,
        href: item.href,
      }),
    );
  });

  container.appendChild(nav);
  header.appendChild(container);

  return header;
}
