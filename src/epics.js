import Rx from 'rxjs/Rx';
import { combineEpics } from 'redux-observable';
import {
  CHANGE_STARS,
  SPACESHIP_MOVES,
  UPDATE_HERO_POSITION,
  SPAWN_ENEMY,
  ENEMIES_MOVES,
} from './constants';
import { selectStarsCount, selectStarsSpeed, selectEnemies } from './selectors';

/**
 *  Stars epics
 */

const starsEpic = (action$, store) => {
  const state = store.getState();
  const number = selectStarsCount(state);
  const speed = selectStarsSpeed(state);

  return Rx.Observable
    .range(1, number)
    .map(() => ({
      x: parseInt(Math.random() * window.innerWidth, 10),
      y: parseInt(Math.random() * window.innerHeight, 10),
      size: Math.random() * 3 + 1,
    }))
    .toArray()
    .flatMap(starArray =>
      Rx.Observable.interval(speed).map(() => {
        const stars = starArray.map(star => {
          if (star.y >= window.innerHeight) {
            star.y = 0; // Reset star to top of the screen
          }
          star.y += 3; // Move star
          return star;
        });
        return {
          type: CHANGE_STARS,
          payload: stars,
        };
      })
    );
};

/**
 *  Hero epics
 */

const heroEpic = action$ => {
  return action$.ofType(SPACESHIP_MOVES).map(action => {
    return {
      type: UPDATE_HERO_POSITION,
      payload: { x: action.payload.evt.clientX },
    };
  });
};

/**
 *  Enemies epics
 */
const enemyCreationEpic = action$ => {
  const ENEMY_FREQUENCY = 1500;
  return Rx.Observable.interval(ENEMY_FREQUENCY).map(() => ({
    type: SPAWN_ENEMY,
    payload: {
      x: parseInt(Math.random() * window.innerWidth, 10),
      y: 5,
    },
  }));
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const enemyMovementEpic = (action$, store) => {
  const ENEMY_MOVEMENT_FREQUENCY = 1000;

  return Rx.Observable.interval(ENEMY_MOVEMENT_FREQUENCY).map(() => {
    const enemies = selectEnemies(store.getState());
    const payload = enemies.map(({ x, y }) => ({
      x: x + getRandomInt(-15, 15),
      y: y + 8,
    }));
    return {
      type: ENEMIES_MOVES,
      payload,
    };
  });
};

// const enemyEpic = combineEpics(enemyCreationEpic, enemyMovementEpic);

export default combineEpics(
  starsEpic,
  heroEpic,
  enemyCreationEpic,
  enemyMovementEpic
);
