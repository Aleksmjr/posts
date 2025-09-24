// src/components/Icon/Icon.js
import styles from './icon.module.scss';

export class Icon {
  /**
   * Создаёт иконку SVG.
   * @param {Object} options
   * @param {string} options.name      - id символа в спрайте
   * @param {string} [options.className] - дополнительный класс
   */
  constructor({ name, className = '' }) {
    this.icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const cls = clsList(className || styles.icon);
    this.icon.setAttribute('class', cls);

    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', `/src/assets/image/sprite.svg#${name}`);
    this.icon.appendChild(use);
  }

  getElement() {
    return this.icon;
  }
}

// Вспомогательная функция, чтобы не дублировать пробелы
function clsList(...items) {
  return items.filter(Boolean).join(' ');
}
