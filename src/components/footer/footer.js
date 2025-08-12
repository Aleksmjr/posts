import { createElement } from '../../helpers/createElement';
import './footer.css';

export function createFooter() {
  const footer = createElement({ tag: 'footer', className: 'footer' });

  const container = createElement({ tag: 'div', className: 'container' });

  const text = createElement({
    tag: 'p',
    content: '2025 SPA-приложение',
    className: 'footer__text',
  });

  container.appendChild(text);
  footer.appendChild(container);
  return footer;
}
