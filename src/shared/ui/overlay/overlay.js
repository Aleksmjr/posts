import { constructor } from '../../../helpers/constructor';
const { div } = constructor();
import styles from './overlay.module.scss';

class Overlay {
  constructor() {
    this.createOverlay();
  }

  createOverlay() {
    this.overlay = div();
    this.overlay.className = styles.overlay;
  }

  show() {
    this.overlay.el.classList.add(styles.overlay_visible);
  }

  hide() {
    this.overlay.el.classList.remove(styles.overlay_visible);
  }
  mount(el) {
    el.append(this.overlay.el);
  }

  addEvent(event, callback) {
    this.overlay.el.addEventListener(event, callback);
  }
}

export default Overlay;
