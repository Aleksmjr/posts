// создает содержимое внутри main, не имея отношения к header и footer
// класс, который наследуется от pages (генерит новую разметку). При этом роутинг должен найти див рут и запихать туда этот эбаут. Определить роутинг можно через массив роутов, где каждый роут - это объект с полями path и component.
import { createElement } from '../helpers/createElement';
import { appendFabric } from '../helpers/appendFabric';

export function createAboutPage() {
  const root = document.getElementById('page-content');
  const section = createElement({ tag: 'section' });
  const container = createElement({ tag: 'div', className: 'container' });
  const title = createElement({ tag: 'h2', content: 'About' });

  appendFabric([
    [container, title],
    [section, container],
    [root, section],
  ]);
}
