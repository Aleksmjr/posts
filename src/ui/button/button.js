// установить на дефолтные значения где нужны props

import clsx from 'clsx';

import { createElement } from '../../helpers/createElement.js';
import styles from './button.module.scss';
import { Icon } from '../icon/icon.js';
/**
 * Класс для создания настраиваемой кнопки.
 */
export class Button {
  /**
   * Создаёт экземпляр кнопки.
   * @param {Object} props - Параметры кнопки.
   * @param {'primary'|'secondary'|'danger'} [props.mod='primary'] - Вариант оформления кнопки.
   * @param {string} [props.className=''] - Дополнительный CSS-класс для кнопки.
   * @param {boolean} [props.wide=false] - Если true, кнопка растягивается на всю ширину контейнера.
   * @param {boolean} [props.reverse=false] - Если true, порядок элементов внутри кнопки меняется на обратный.
   * @param {Object} [props.attrs={}] - Дополнительные HTML-атрибуты для кнопки.
   * @param {string|null} [props.icon=null] - Имя SVG-иконки для отображения (id символа в спрайте).
   * @param {string} [props.text=''] - Текст кнопки.
   * @param {string|null} [props.href=null] - Если указан URL, создаётся элемент <a> вместо <button>.
   * @param {Function|null} [props.onClick=null] - Функция-обработчик события click.
   */

  constructor(props) {
    this.button = createElement({
      tag: props.href ? 'a' : 'button',
      className: clsx(
        styles.button,
        this.checkMod(props.mod),
        props.reverse ? styles.button_reverse : null,
        props.wide ? styles.button_fullWidth : null,
        props.className ?? null,
      ),
      content: props.text?.trim() ? props.text : null,
      attrs: {
        ...props.attrs,
        ...(props.href ? { href: props.href } : {}),
        type: props.href ? null : 'button',
      },
    });
    this.setIcon(props.icon);
    this.setClick(props.onClick);
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

  setIcon(icon) {
    if (!icon) {
      return;
    }

    // Создаём экземпляр Icon и добавляем его в кнопку
    const iconComponent = new Icon({
      name: icon,
      className: styles.button__icon,
    });
    this.button.append(iconComponent.getElement());
  }

  setClick(onClick) {
    if (onClick) {
      this.button.addEventListener('click', onClick);
    }
  }
}
