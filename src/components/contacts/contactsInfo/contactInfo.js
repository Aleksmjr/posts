import { appendFabric } from '../../../helpers';
import styles from './contactInfo.module.scss';
import { constructor } from '../../../helpers/constructor';
const { section, h2, h3, container, div, p, span } = constructor();

export class ContactInfo {
  constructor() {
    this.init();
  }

  getElements() {
    this.root = document.getElementById('page-content');
  }

  createSectionWithTitle() {
    this.section = section();
    this.container = container();
    this.title = h2();
    this.title.className = 'contact__title';
    this.title.textContent = 'Contacts';
    appendFabric([
      [this.container.el, this.title.el],
      [this.section.el, this.container.el],
    ]);
  }

  createGroup() {
    this.group = div();
    this.group.className = styles.contact__group;
    this.contactGroupTitle = h3();
    this.contactGroupTitle.textContent = 'Lorem lorem';
    this.contactGroupText = p();
    this.contactGroupText.textContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    this.contactGroupTextBottom = p();
    this.contactGroupTextBottom.textContent =
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    appendFabric([
      [
        this.group.el,
        [
          this.contactGroupTitle.el,
          this.contactGroupText.el,
          this.contactGroupTextBottom.el,
        ],
      ],
      [this.container.el, this.group.el],
    ]);
  }

  createSubGroup() {
    this.subGroup = div();
    this.subGroup.className = styles.contact__group;
    this.subGroupTitle = h3();
    this.subGroupTitle.textContent = 'Interests and hobbies';
    this.subGroupText = p();
    this.subGroupText.textContent =
      ' A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.';
    appendFabric([
      [this.subGroup.el, [this.subGroupTitle.el, this.subGroupText.el]],
      [this.container.el, this.subGroup.el],
    ]);
  }

  createContactGroup() {
    const text = [
      ['Agency name', '2025'],
      ['Studio name', '2024'],
      ['Company name', '2023'],
    ];

    this.portfolioWork = div();
    this.portfolioWork.className = styles.contact__group;

    for (let i = 0; i < text.length; i++) {
      const portfolioWorkName = p();
      portfolioWorkName.textContent = text[i][0];
      portfolioWorkName.className = styles.contact__portfolio_item;
      const portfolioWorkYear = span();
      portfolioWorkYear.textContent = text[i][1];
      portfolioWorkYear.className = styles.contact__portfolio_item;
      const portfolioWorkGroup = div();
      portfolioWorkGroup.className = styles.contact__portfolio;
      appendFabric([
        [portfolioWorkGroup.el, [portfolioWorkName.el, portfolioWorkYear.el]],
        [this.portfolioWork.el, portfolioWorkGroup.el],
      ]);
    }
  }

  appendElements() {
    appendFabric([
      [this.container.el, this.portfolioWork.el],
      [this.section.el, this.container.el],
      [this.root, this.section.el],
    ]);
  }

  init() {
    this.getElements();
    this.createSectionWithTitle();
    this.createGroup();
    this.createSubGroup();
    this.createContactGroup();
    this.appendElements();
  }
}
