import 'modern-normalize';
import './styles/style.scss';
import { createMainLayout } from './layouts/mainLayout.js';

const root = document.querySelector('#root');

createMainLayout(root);
