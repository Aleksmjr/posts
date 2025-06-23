// установить на дефолтные значения где нужны props

import { createElement } from '../../helpers/createElement.js';

/**
 * Класс для создания настраиваемой кнопки.
 */
class Button {
  /**
   * Создаёт экземпляр кнопки.
   * @param {Object} options - Параметры кнопки.
   * @param {string} [options.text='Оставить заявку'] - Текст кнопки.
   * @param {string} [options.className=''] - Классы CSS для кнопки.
   * @param {Object} [options.attrs={}] - HTML-атрибуты кнопки.
   * @param {string|null} [options.icon=null] - Путь к иконке, которая добавляется в кнопку.
   * @param {Function|null} [options.onClick=null] - Обработчик события клика.
   */
  constructor(props) {
    this.icon = props.icon;
    this.onClick = props.onClick;
    (props.text = props.text ? props.text : 'Оставь заявку'),
      (this.button = createElement({
        tag: 'button',
        className: `button ${props.className}`,
        content: props.text,
        attrs: props.attrs,
      }));
    this.setIcon();
    this.setClick();
  }

  /**
   * Добавляет иконку в кнопку, если указана.
   * @private
   */
  setIcon() {
    if (this.icon) {
      this.button.appendChild(
        createElement({
          tag: 'img',
          attrs: { src: this.icon },
          className: 'button__icon',
        }),
      );
    }
  }

  /**
   * Назначает обработчик события клика, если передан.
   * @private
   */
  setClick() {
    if (this.onClick) {
      this.button.addEventListener('click', this.onClick);
    }
  }
}

/**
 * Функция для создания кнопки с настройками по умолчанию.
 * @function
 */
export function createButton(props) {
  new Button(props);
}
