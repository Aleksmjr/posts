import { createPostsPage } from '../pages/posts';
import { createContactsPage } from '../pages/contacts';
import { createAboutPage } from '../pages/about';
export class Routes {
  root = document.getElementById('page-content');
  routes = {
    '/': () => createAboutPage(this.root),
    '/contacts': () => createContactsPage(this.root),
    '/posts': () => createPostsPage(this.root),
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
    this.handleUrl();
  }
}
