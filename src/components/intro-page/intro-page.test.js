import React from 'react';
import renderer from 'react-test-renderer';

import IntroPage from './intro-page.jsx';

it(`Отрисовка представления IntroPage`, () => {
  const setting = {
    GAME_TIME: 100,
    ALLOWABLE_MISTAKES_NUMBER: 666
  };

  const view = renderer.create(
      <IntroPage
        gameTime={setting.GAME_TIME}
        allowableMistakesNumber={setting.ALLOWABLE_MISTAKES_NUMBER}
        onStartButtonClick={(evt) => evt.preventDefault()}
      />
  ).toJSON();

  expect(view).toMatchSnapshot();
});
