import { createElement } from '../helpers/createElement';
import { createFooter } from '../components/footer/footer';
import { createHeader } from '../components/header/header';
export function createMainLayout(container) {
  container.append(
    createHeader(),
    createElement({
      tag: 'main',
      attrs: { id: 'page-content' },
      styles: { flex: 1 },
    }),
    createFooter(),
  );

  return container;
}
