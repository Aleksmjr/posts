import { createElement } from '../../../helpers';
import { appendFabric } from '../../../helpers';
import styles from './contactInfo.module.scss';
import clsx from 'clsx';

export class ContactInfo {
  constructor() {
    this.init();
  }

  getElements() {
    this.root = document.getElementById('page-content');
  }

  createElements() {
    this.section = createElement({ tag: 'section' });
    this.container = createElement({
      tag: 'div',
      className: clsx('container', styles.contact__container),
    });
    this.title = createElement({ tag: 'h2', content: 'Contacts' });
    this.group = createElement({
      tag: 'div',
      className: styles.contact__group,
      content: `
        <h3 class="${styles.contact__group_title}">Lorem lorem</h3>
        <p class="${styles.contact__group_text}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `,
    });

    this.subGroup = createElement({
      tag: 'div',
      className: styles.contact__group,
      content: `
         <h3 class="${styles.contact__subgroup_title}">Interests and hobbies</h3>
         <p class="${styles.contact__subgroup_text}">
         A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.</p>
    `,
    });

    this.portfolioWork = createElement({
      tag: 'div',
      className: styles.contact__portfolio,
      content: `
        <div class="${styles.contact__portfolio_item}"><h4>Agency name</h4><span>2025</span></div>
        <div class="${styles.contact__portfolio_item}"><h4>Studio name</h4><span>2024</span></div>
        <div class="${styles.contact__portfolio_item}"><h4>Company name</h4><span>2023</span></div>
    `,
    });
  }

  appendElements() {
    appendFabric([
      [
        this.container,
        [this.title, this.group, this.subGroup, this.portfolioWork],
      ],
      [this.section, this.container],
      [this.root, this.section],
    ]);
  }

  init() {
    this.getElements();
    this.createElements();
    this.appendElements();
  }
}
