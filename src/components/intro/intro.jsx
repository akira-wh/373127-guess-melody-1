import React from 'react';

const Intro = (props) => {
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

export default Intro;