export function createElement(props) {
  if (!props.tag) return;

  const el = document.createElement(props.tag);

  props.content && (() => (el.textContent = props.content))();

  return el;
}
