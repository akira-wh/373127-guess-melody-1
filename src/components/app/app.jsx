import React from 'react';

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

  return <IntroPage gameTime={setting.GAME_TIME} allowableMistakesNumber={setting.ALLOWABLE_MISTAKES_NUMBER}/>;
};

export default App;
