import { createElement } from '../../helpers/createElement';

export function createHeader() {
  const header = createElement({ tag: 'header', class: 'header' });
  const container = createElement({ tag: 'div', class: 'container' });

  const navItems = [
    { text: 'Главная', href: '/' },
    { text: 'О нас', href: '/about' },
    { text: 'Посты', href: '/posts' },
    { text: 'Блог', href: '/blog' },
  ];

  const nav = createElement({ tag: 'nav', class: 'header__nav' });

  navItems.forEach((item) => {
    const link = createElement({
      tag: 'a',
      class: 'header__link',
      content: item.text,
      href: item.href,
    });

    nav.appendChild(link);
  });

  container.appendChild(nav);
  header.appendChild(container);
  // не забывай, что мы возвращаем header, иначе будешь со своим undefined возиться
  return header;
}
