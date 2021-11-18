import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.css';
import '../styles/responsive.css';

import './components/app-bar';
import './components/hero-image';
import './components/error-message';
import './components/skip-to-content';
import './components/footer-copyright';
import './components/page-loader';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu-toggle'),
  drawer: document.querySelector('.nav-menu'),
  content: document.querySelector('#mainContent'),
},
{
  skipButton: document.querySelector('.skip-link'),
  skipTarget: document.getElementById('mainContent'),
});

const pageLoader = () => {
  document.querySelector('page-loader').classList.remove('d-none');
  document.querySelector('page-loader div').classList.add('loader');
  document.body.style.opacity = '0.85';
};

const pageLoaderAfter = () => {
  const loadingTimeout = setInterval(() => {
    document.querySelector('page-loader').classList.add('d-none');
    document.querySelector('page-loader div').classList.remove('loader');
    document.body.style.opacity = '1';
    clearTimeout(loadingTimeout);
  }, 1000);
};

window.addEventListener('hashchange', () => {
  pageLoader();

  app.renderPage();

  pageLoaderAfter();
});

window.addEventListener('load', () => {
  pageLoader();

  app.renderPage();
  swRegister();

  pageLoaderAfter();
});
