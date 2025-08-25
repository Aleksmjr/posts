import { createElement } from '../../helpers/createElement';
import clsx from 'clsx';
import styles from './footer.module.scss';
import { appendFabric } from '../../helpers';

export function createFooter() {
  const footer = createElement({ tag: 'footer', className: styles.footer });

  const container = createElement({
    tag: 'div',
    className: clsx(styles.footer__container, 'container'),
  });

  const text = createElement({
    tag: 'span',
    content: '2025 SPA-website by Maskaev Aleksei',
    className: styles.footer__text,
  });

  appendFabric([
    [container, text],
    [footer, container],
  ]);

  return footer;
}
