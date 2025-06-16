export function createElement(props) {
  if (!props.tag) {
    return;
  }

  const el = document.createElement(props.tag);

  props.content && (el.textContent = props.content);

  if (props.class) {
    el.className = props.class;
  }

  if (props.href) {
    el.href = props.href;
  }

  return el;
}
