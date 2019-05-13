import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import IntroPage from './intro-page.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Клик по кнопке "Начать игру" срабатывает.`, () => {
  const setting = {
    GAME_TIME: 10,
    ALLOWABLE_MISTAKES_NUMBER: 1
  };

  const onStartButtonClick = jest.fn();

  const view = shallow(
      <IntroPage
        gameTime={setting.GAME_TIME}
        allowableMistakesNumber={setting.ALLOWABLE_MISTAKES_NUMBER}
        onStartButtonClick={onStartButtonClick}
      />
  );

  const startButton = view.find(`.welcome__button`);
  startButton.simulate(`click`, {
    preventDefault() {}
  });

  expect(onStartButtonClick).toHaveBeenCalledTimes(1);
});
