export function createElement(props) {
  if (!props.tag) {
    return;
  }

  const el = document.createElement(props.tag);

  props.content && (el.innerHTML = props.content);

  props.className && (el.className = props.className);

  props.href && props.tag === 'a' && (el.href = props.href);

  if (props.attrs) {
    Object.entries(props.attrs).forEach((item) => {
      el.setAttribute(item[0], item[1]);
    });
  }

  return el;
}

export class Element {
  constructor(props) {
    if (!props.tag) {
      return;
    }

    this.el = document.createElement(props.tag);

    props.content && (this.el.innerHTML = props.content);

    props.className && (this.el.className = props.className);

    props.href && props.tag === 'a' && (this.el.href = props.href);

    if (props.attrs) {
      Object.entries(props.attrs).forEach((item) => {
        this.el.setAttribute(item[0], item[1]);
      });
    }
  }

  get textContent() {
    return this.el.textContent;
  }

  set textContent(value) {
    this.el.textContent = value;
  }

  get className() {
    return this.el.classList;
  }

  set className(value) {
    this.el.classList.add(value);
  }

  set href(value) {
    this.el.href = value;
  }

  set attrs(value) {
    Object.entries(value).forEach((item) => {
      this.el.setAttribute(item[0], item[1]);
    });
  }
}
