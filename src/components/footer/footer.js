import { createElement } from '../../helpers/createElement';
import { Button } from '../../ui/button/button';
import './footer.css';

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

  const btn = new Button({
    text: 'Загрузить еще',
    attrs: { type: 'button' },
    reverse: true,
    className: 'footer__button',
    icon: 'check',
    onClick: () => {
      console.log('Я - стандартная кнопка');
    },
  });

  const btn2 = new Button({
    text: 'Продолжить',
    attrs: { type: 'button' },
    className: 'footer__button',
    mod: 'secondary',
    icon: 'check',
    onClick: () => {
      console.log('Я - кнопка secondary');
    },
  });

  const btn3 = new Button({
    text: 'Опасная кнопка',
    attrs: { type: 'button' },
    className: 'footer__button',
    mod: 'danger',
    icon: 'check',
    onClick: () => {
      console.log('Я - кнопка danger');
    },
  });

  const btn4 = new Button({
    text: 'Длинющая кнопенция',
    attrs: { type: 'button' },
    className: 'footer__button',
    icon: 'check',
    wide: 'true',
    onClick: () => {
      console.log('А я - кнопка на всю ширину');
    },
  });

  const btn5 = new Button({
    text: 'А меня ты не нажмешь',
    attrs: { type: 'button', disabled: '' },
    className: 'footer__button',
    icon: 'check',
    onClick: () => {
      console.log('click - тут потом будет событие');
    },
  });

  container.appendChild(text);
  container.appendChild(btn.button);
  container.appendChild(btn2.button);
  container.appendChild(btn3.button);
  container.appendChild(btn4.button);
  container.appendChild(btn5.button);

  footer.appendChild(container);
  return footer;
}
