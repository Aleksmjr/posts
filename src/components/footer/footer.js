import { createElement } from '../../helpers/createElement';

export function createFooter() {
  // создаем футер
  const footer = createElement({ tag: 'footer', class: 'footer' });

  const container = createElement({ tag: 'div', class: 'container' });

  // создаем элементы(текст и т.п)
  const text = createElement({
    tag: 'p',
    content: '2025 SPA-приложение',
    class: 'footer__text',
  });
  // добавляем эти элементы внутрь футера
  footer.appendChild(container);
  container.appendChild(text);

  return footer;
}
