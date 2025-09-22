import { appendFabric } from '../../../helpers';
import { constructor } from '../../../helpers/constructor';
import styles from '../aboutMainPost/aboutMainPost.module.scss';
import { InfoList } from '../../../shared/infoList/infoList';
const { section, h2, h3, container, div, p, img } = constructor();

export class AboutMainPost {
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
    this.title.className = 'about__title';
    this.title.textContent = 'About';
    appendFabric([
      [this.container.el, this.title.el],
      [this.section.el, this.container.el],
    ]);
  }

  createMainPost() {
    this.postWrapper = div();
    this.postWrapper.className = styles.about__post;
    this.postImage = img();
    this.postImage.src = '/src/assets/image/about/about-main-post.webp';
    this.postGroup = div();
    this.postGroupTitle = h3();
    this.postGroupTitle.textContent = 'Introduction';
    this.postGroupText = p();
    this.postGroupText.textContent =
      'A little paragraph introduction that gives a sense of what you do, who you are, where you’re from, and why you created this website.';
    this.postGroupSubText = p();
    this.postGroupSubText.textContent =
      'This is the most likely part of the page to be read in full.';

    appendFabric([
      [
        this.postGroup.el,
        [
          this.postGroupTitle.el,
          this.postGroupText.el,
          this.postGroupSubText.el,
        ],
      ],
      [this.postWrapper.el, [this.postImage.el, this.postGroup.el]],
    ]);
  }

  createGallery() {
    this.galleryWrapper = div();
    this.galleryWrapper.className = styles.about__gallery;
    this.galleryTitle = h3();
    this.galleryTitle.textContent = 'Interests and hobbies';

    this.galleryText = p();
    this.galleryText.textContent =
      'A little section to round out the professional purpose of this webpage. Who’s the person behind it, really? What do they like—and what are they like? Sections like this can go a little bit longer because it’s nice to learn more about what makes someone tick.';
    this.galleryText.className = styles.about__gallery_text;

    this.galleryImageGroup = div();
    this.galleryImageGroup.className = styles.about__gallery_group;

    this.galleryImage1 = img();
    this.galleryImage1.src = '/src/assets/image/about/about-gallery-group.webp';
    this.galleryImage2 = img();
    this.galleryImage2.src = '/src/assets/image/about/about-gallery-group.webp';
    this.galleryImage3 = img();
    this.galleryImage3.src = '/src/assets/image/about/about-gallery-group.webp';

    appendFabric([
      [
        this.galleryImageGroup.el,
        [this.galleryImage1.el, this.galleryImage2.el, this.galleryImage3.el],
      ],
      [
        this.galleryWrapper.el,
        [this.galleryTitle.el, this.galleryText.el, this.galleryImageGroup.el],
      ],
    ]);
  }

  infoList() {
    return new InfoList([
      ['Agency name', '2025'],
      ['Studio name', '2024'],
      ['Company name', '2023'],
    ]);
  }

  appendElements() {
    appendFabric([
      [
        this.container.el,
        [this.postWrapper.el, this.galleryWrapper.el, this.infoList().el],
      ],
      [this.root, this.section.el],
    ]);
  }

  init() {
    this.getElements();
    this.createSectionWithTitle();
    this.createMainPost();
    this.createGallery();
    this.appendElements();
  }
}
