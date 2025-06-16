export function createElement(props) {
  if (!props.tag) {
    return;
  }

  const el = document.createElement(props.tag);

  props.content && (el.textContent = props.content);

  props.className && (el.className = props.className);

  props.href && props.tag === 'a' && (el.href = props.href);

  return el;
}
