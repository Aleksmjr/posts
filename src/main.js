import 'modern-normalize';
import './styles/style.scss';
import { createMainLayout } from './layouts/mainLayout.js';
import { createContactsPage } from './pages/contacts.js';
import { createPostsPage } from './pages/posts.js';
import { Routes } from './helpers/routing.js';
import { createAboutPage } from './pages/about.js';

const root = document.querySelector('#root');

createMainLayout(root);

new Routes();
const main = document.getElementById('page-content');

createAboutPage(main);
createContactsPage(main);

createPostsPage(main);
