import { appendFabric } from '../../../helpers';
import styles from './createPostModal.module.scss';
import { constructor } from '../../../helpers/constructor';
const { h2, div, input, form, textarea } = constructor();
import { Button } from '../../../ui/button/button';
import Overlay from '../../../shared/ui/overlay/overlay';
import { FileInput } from '../../../shared/ui/fileInput/fileInput';

class CreatePostModal {
  static instance = null; // ✅ защита от дубликатов

  constructor() {
    if (CreatePostModal.instance) {
      return CreatePostModal.instance;
    }

    this.overlay = new Overlay();
    this.overlay.mount(document.body);

    this.createModal();
    this.addEvents();
  }

  createModal() {
    this.wrapper = div();
    this.wrapper.className = styles.post__modal;

    this.title = h2();
    this.title.textContent = 'Добавить новый пост';

    this.form = form();
    this.form.className = styles.post__modal_form;

    this.inputs = div();
    this.inputs.className = styles.post__modal_wrapper;

    this.author = input('text', 'Автор', 'AUTHOR', 'on');
    this.email = input('email', 'Email', 'EMAIL', 'on');
    this.date = input('date', 'Дата', 'DATE', 'off');
    this.message = textarea('Сообщение', 'MESSAGE');

    this.fileInput = new FileInput({
      text: 'Выбрать изображение',
      id: 'upload-file',
      previewElement: this.preview,
    });

    this.sendBtn = new Button({
      text: 'Отправить',
      mod: 'secondary',
    });

    appendFabric([
      [this.wrapper.el, this.title.el],
      [this.wrapper.el, this.form.el],
      [this.form.el, this.inputs.el],
      [
        this.inputs.el,
        [this.author.el, this.email.el, this.date.el, this.message.el],
      ],
      [this.form.el, this.fileInput],
      [this.form.el, this.sendBtn],
    ]);

    document.body.append(this.wrapper.el);
  }

  open() {
    this.wrapper.el.classList.add(styles.visible);
    this.overlay.show();
  }

  close() {
    this.wrapper.el.classList.remove(styles.visible);
    this.overlay.hide();
  }

  addEvents() {
    this.overlay.addEvent('click', () => this.close());
  }
}

export default CreatePostModal;
