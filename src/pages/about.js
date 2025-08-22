// создает содержимое внутри main, не имея отношения к header и footer
// класс, который наследуется от pages (генерит новую разметку). При этом роутинг должен найти див рут и запихать туда этот эбаут. Определить роутинг можно через массив роутов, где каждый роут - это объект с полями path и component.
import { createElement } from '../helpers/createElement';

export function createAboutPage(root) {
  const section = createElement({ tag: 'section' });
  const container = createElement({ tag: 'div', className: 'container' });
  const title = createElement({ tag: 'h2', content: 'About' });

  container.appendChild(title);
  section.appendChild(container);
  root.appendChild(section);
}
