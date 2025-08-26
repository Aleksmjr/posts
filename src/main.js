import 'modern-normalize';
import './styles/style.scss';
import { createMainLayout } from './layouts/mainLayout.js';
import { Routes } from './helpers/routing.js';

const root = document.querySelector('#root');

createMainLayout(root);

new Routes();
