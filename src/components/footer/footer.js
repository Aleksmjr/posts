import './footer.css';
import { createElement } from '../../helpers/createElement';

export function createFooter() {
  // создаем футер
  const footer = createElement({ tag: 'footer', className: 'footer' });

  const container = createElement({ tag: 'div', className: 'container' });

  // создаем элементы(текст и т.п)
  const text = createElement({
    tag: 'p',
    content: '2025 SPA-приложение',
    className: 'footer__text',
  });
  // добавляем эти элементы внутрь футера
  footer.appendChild(container);
  container.appendChild(text);

  return footer;
}
