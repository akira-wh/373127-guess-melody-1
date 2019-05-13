import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

/**
 * Настройки приложения.
 *
 * @constant
 * @enum
 * @type {object}
 */
const APP_SETTING = {
  GAME_TIME: 5,
  ALLOWABLE_MISTAKES_NUMBER: 3
};

/**
 * Селектор root-контейнера приложения.
 *
 * @constant
 * @type {string}
 */
const APP_ROOT_SELECTOR = `.main`;

/**
 * Root-контейнер приложения.
 *
 * @constant
 * @type {node}
 */
const APP_ROOT = document.querySelector(APP_ROOT_SELECTOR);

/**
 * Инициализация приложения.
 *
 * @function initApp
 */
const initApp = () => {
  ReactDOM.render(<App setting={APP_SETTING}/>, APP_ROOT);
};

initApp();
