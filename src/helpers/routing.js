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
  // сделать так, чтобы routes зараборали в кликах!!
  addEventListeners() {
    this.headerLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.clearRoot();
        this.currentRoute = e.target.getAttribute('href');

        this.handleRouteChange();
        this.setUrl();
      });
    });

    window.addEventListener('load', () => {
      this.handleUrl();
    });

    window.addEventListener('popstate', () => {
      this.handleUrl();
      this.clearRoot();
      this.handleRouteChange();
    });
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
