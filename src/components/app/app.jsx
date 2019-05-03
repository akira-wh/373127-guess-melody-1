import React from 'react';
import Intro from '../intro/intro.jsx';

const App = (props) => {
  const setting = props.setting;

  return <Intro gameTime={setting.GAME_TIME} allowableMistakesNumber={setting.ALLOWABLE_MISTAKES_NUMBER}/>;
};

export default App;
