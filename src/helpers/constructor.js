import { Element } from './createElement';

export function constructor() {
  function section() {
    return new Element({ tag: 'section' });
  }

  function h2() {
    return new Element({ tag: 'h2' });
  }

  function h3() {
    return new Element({ tag: 'h3' });
  }

  function container() {
    return new Element({ tag: 'div', className: 'container' });
  }

  function div() {
    return new Element({ tag: 'div' });
  }

  function p() {
    return new Element({ tag: 'p' });
  }

  function span() {
    return new Element({ tag: 'span' });
  }

  function form() {
    return new Element({ tag: 'form', attrs: { method: 'POST' } });
  }

  function img() {
    return new Element({ tag: 'img' });
  }

  function input(
    type = 'text',
    placeholder = '',
    name = '',
    autocomplete = '',
  ) {
    return new Element({
      tag: 'input',
      attrs: { type, placeholder, name, autocomplete },
      className: 'input-field',
    });
  }

  function textarea(placeholder = '', name = '') {
    return new Element({
      tag: 'textarea',
      attrs: { placeholder, name },
      className: 'textarea-field',
    });
  }

  return {
    section,
    h2,
    h3,
    container,
    div,
    p,
    span,
    form,
    img,
    input,
    textarea,
  };
}
