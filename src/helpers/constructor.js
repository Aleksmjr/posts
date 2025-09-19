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

  return {
    section,
    h2,
    h3,
    container,
    div,
    p,
    span,
  };
}
