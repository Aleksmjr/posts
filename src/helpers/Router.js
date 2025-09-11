import { createPostsPage } from '../pages/posts';
import { createContactsPage } from '../pages/contacts';
import { createAboutPage } from '../pages/about';
import { clearElement } from './clearElement';

export class Router {
  root = document.getElementById('page-content');
  routes = {
    '/': createAboutPage,
    '/contacts': createContactsPage,
    '/posts': createPostsPage,
  };
  constructor() {
    this.init();
  }

  getElements() {
    this.headerLinks = document.querySelectorAll('[data-router-link]');
  }

  init() {
    this.getElements();
    this.addEventListeners();
    this.setActiveMenuLink();
  }

  addEventListeners() {
    document.body.addEventListener('click', (e) => {
      e.preventDefault();

      const link = e.target.closest('[data-router-link]');

      if (link?.getAttribute('href') === this.currentRoute) {
        return;
      }

      if (link) {
        this.currentRoute = link.getAttribute('href');
        this.navigate();
      }
    });

    window.addEventListener('load', () => {
      this.handleUrl();
    });

    window.addEventListener('popstate', () => {
      this.handleUrl();
    });
  }

  navigate() {
    clearElement(this.root);
    this.handleRouteChange();
    this.setUrl();
    this.setActiveMenuLink();
  }

  handleRouteChange() {
    if (this.routes[this.currentRoute]) {
      this.routes[this.currentRoute]();
    } else {
      this.routes['/'](); // Default route
    }
  }

  handleUrl() {
    this.currentRoute = window.location.pathname;
    clearElement(this.root);
    this.handleRouteChange();
  }

  setUrl() {
    window.history.pushState({}, '', this.currentRoute);
  }

  setActiveMenuLink() {
    if (document.querySelector('[data-router-link-active]')) {
      document
        .querySelector('[data-router-link-active]')
        .removeAttribute('data-router-link-active');
    }

    document
      .querySelector(`a[href="${window.location.pathname}"]`)
      .setAttribute('data-router-link-active', '');
  }
}
