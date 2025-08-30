import { createPostsPage } from '../pages/posts';
import { createContactsPage } from '../pages/contacts';
import { createAboutPage } from '../pages/about';
export class Routes {
  root = document.getElementById('page-content');
  routes = {
    '/': createAboutPage,
    '/contacts': createContactsPage,
    '/posts': createPostsPage,
  };
  constructor() {
    this.init();
  }

  clearRoot() {
    this.root.innerHTML = '';
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
      const link = e.target.closest('[data-router-link]');
      if (link) {
        e.preventDefault();
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
    this.clearRoot();
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
    this.clearRoot();
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
