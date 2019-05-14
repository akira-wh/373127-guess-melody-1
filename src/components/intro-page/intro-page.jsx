import React from 'react';
import PropTypes from 'prop-types';

/**
 * Представление Intro Page.
 *
 * @function IntroPage
 * @param {object} props — данные компонента
 * @return {object}
 */
const IntroPage = (props) => {
  const {gameTime, allowableMistakesNumber} = props;

  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img src="img/melody-logo.png"
          width="186" height="83"
          alt="Угадай мелодию"/>
      </div>

      <button className="welcome__button">
        <span className="visually-hidden">Начать игру</span>
      </button>

      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>За {gameTime} минут нужно ответить на все вопросы.</li>
        <li>Можно допустить {allowableMistakesNumber} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

/**
 * Валидация входных данных.
 */
IntroPage.propTypes = {
  gameTime: PropTypes.number.isRequired,
  allowableMistakesNumber: PropTypes.number.isRequired
};

export default IntroPage;
