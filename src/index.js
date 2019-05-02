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
 * Селектор контентной части приложения.
 *
 * @constant
 * @type {string}
 */
const APP_CONTENT_SELECTOR = `.main`;

/**
 * Инициализация приложения.
 *
 * @function initApp
 */
const initApp = () => {
  ReactDOM.render(<App setting={APP_SETTING}/>, document.querySelector(APP_CONTENT_SELECTOR));
};

initApp();
