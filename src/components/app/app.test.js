import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

it(`Отрисовка представления App`, () => {
  const setting = {
    GAME_TIME: 555,
    ALLOWABLE_MISTAKES_NUMBER: 1
  };

  const view = renderer.create(<App setting={setting}/>).toJSON();

  expect(view).toMatchSnapshot();
});
