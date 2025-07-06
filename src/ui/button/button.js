// установить на дефолтные значения где нужны props

import clsx from 'clsx';

import { createElement } from '../../helpers/createElement.js';
import styles from './button.module.scss';
/**
 * Класс для создания настраиваемой кнопки.
 */
export class Button {
  /**
   * Создаёт экземпляр кнопки.
   * @param {Object} options - Параметры кнопки.
   * @param {'primary' | 'secondary' | danger} [options.mod = 'primary'] - Модификатор кнопки.
   * @param {string} [options.className=''] - Классы CSS для кнопки.
   * @param {boolean} [options.wide=false] - true если кнопка на всю ширину родителя.
   * @param {Object} [options.attrs={}] - HTML-атрибуты кнопки.
   * @param {string|null} [options.icon=null] - Путь к иконке, которая добавляется в кнопку.
   * @param {Function|null} [options.onClick=null] - Обработчик события клика.
   */
  constructor(props) {
    this.icon = props.icon;
    this.onClick = props.onClick;

    this.button = createElement({
      tag: 'button',
      className: clsx(
        styles.button,
        this.checkMod(props.mod),
        props.reverse ? styles.button_reverse : null,
        props.wide ? styles.button_fullWidth : null,
        props.className ?? null,
      ),
      content: props.text,
      attrs: props.attrs,
    });
    this.setIcon();
    this.setClick();
  }

  checkMod(propsMod) {
    switch (propsMod) {
      case 'primary':
        return styles.button_primary;
      case 'secondary':
        return styles.button_secondary;
      case 'danger':
        return styles.button_danger;
      default:
        return styles.button_primary;
    }
  }

  /**
   * Добавляет иконку в кнопку, если указана.
   * @private
   */
  setIcon() {
    if (!this.icon) {
      return;
    }

    //  insertAdjacentHTML
    this.button.insertAdjacentHTML(
      'beforeend',
      `<svg class="${styles.button__icon}" width="24" height="24">
         <use href="/src/assets/image/sprite.svg#${this.icon}"></use>
       </svg>`,
    );
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
