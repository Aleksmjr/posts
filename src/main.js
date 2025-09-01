import 'modern-normalize';
import './styles/style.scss';
import { createMainLayout } from './layouts/mainLayout.js';
import { Router } from './helpers/Router.js';

const root = document.querySelector('#root');

createMainLayout(root);

new Router();
