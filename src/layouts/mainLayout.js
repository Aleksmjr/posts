import { createElement } from '../helpers/createElement';
import { createFooter } from '../components/footer/footer';
import { createHeader } from '../components/header/header';

export function createMainLayout(container) {
  const header = createHeader();
  const main = createElement({ tag: 'main' });
  const footer = createFooter();

  container.append(header, main, footer);

  return container;
}
