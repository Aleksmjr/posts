import { Button } from '../../../ui/button/button';

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

    return this.container; // возвращаем контейнер с кнопкой и input
  }

  init() {
    this.createContainer();
    this.createButton();
    this.createHiddenInput();
  }

  // создаём label для input
  createContainer() {
    this.container = document.createElement('div');
    // this.container.className = styles.input__label;
  }

  createButton() {
    this.button = new Button({
      text: this.text,
      className: this.className,
      mod: 'secondary',
    });
    this.container.append(this.button);
  }

  //скрытый input
  createHiddenInput() {
    this.input = document.createElement('input');
    this.input.type = 'file';
    this.input.accept = this.accept;
    this.input.setAttribute('name', 'upload-file');
    this.input.className = 'input__file';
    if (this.id) {
      this.input.id = this.id;
    }
    this.container.append(this.input);
  }
}
