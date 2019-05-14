import React from 'react';
import PropTypes from 'prop-types';

import IntroPage from '../intro-page/intro-page.jsx';

/**
 * Представление всего приложения.
 *
 * @function App
 * @param {object} props — данные компонента
 * @return {object}
 */
const App = (props) => {
  const setting = props.setting;

  return <IntroPage
    gameTime={setting.GAME_TIME}
    allowableMistakesNumber={setting.ALLOWABLE_MISTAKES_NUMBER}
    onStartButtonClick={(evt) => evt.preventDefault()}
  />;
};

/**
 * Валидация входных данных.
 */
App.propTypes = {
  setting: PropTypes.objectOf(PropTypes.number).isRequired
};

export default App;
