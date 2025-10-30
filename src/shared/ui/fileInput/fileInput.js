import { Button } from '../../../ui/button/button';
import styles from './fileInput.module.scss';
export class FileInput {
  constructor({
    text = 'Загрузить изображение',
    onUpload,
    accept = 'image/*',
    id,
    previewElement = null,
  }) {
    this.text = text;
    this.onUpload = onUpload;
    this.accept = accept;
    this.id = id;
    this.previewElement = previewElement;

    this.init();

    return this.label; // возвращаем контейнер с кнопкой и input
  }

  init() {
    this.createContainer();
    this.createButton();
    this.createHiddenInput();
    this.createPreview();
    this.addEventListeners();
  }

  // создаём label для input
  createContainer() {
    this.label = document.createElement('label');
    this.label.setAttribute('for', 'upload-file');
    this.label.className = styles.post__modal_label;
  }

  createButton() {
    this.button = new Button({
      text: this.text,
      className: this.className,
      mod: 'secondary',
    });
    this.label.append(this.button);
  }

  //скрытый input
  createHiddenInput() {
    this.input = document.createElement('input');
    this.input.type = 'file';
    this.input.accept = this.accept;
    this.input.setAttribute('name', 'upload-file');
    this.input.className = styles.input__file;
    this.input.style.display = 'none';
    if (this.id) {
      this.input.id = this.id;
    }
    this.label.append(this.input);
  }

  createPreview() {
    this.preview = document.createElement('img');
    this.preview.className = styles['post__modal_form--preview'];
    this.label.append(this.preview);
  }

  addEventListeners() {
    this.button.addEventListener('click', () => {
      this.input.value = '';
      this.input.click();
    });

    // нужно только сюда добавить код на изменение файла и занесение его в this.preview
    this.input.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) {
        return;
      }

      if (this.onUpload) {
        this.onUpload(file);
      }

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          this.preview.src = ev.target.result;
          this.preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });
  }
}
