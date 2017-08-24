import { combineReducers } from 'redux';
import {
  CHANGE_SPEED,
  CHANGE_STAR_NUMBER,
  CHANGE_STARS,
  UPDATE_HERO_POSITION,
  SPAWN_ENEMY,
  ENEMIES_MOVES,
} from './constants';

/**
 *  Stars reducer
 */
const SPEED = 40;
const speed = (state = SPEED, action) => {
  switch (action.type) {
    case CHANGE_SPEED:
      return action.payload;
    default:
      return state;
  }
};

const STAR_NUMBER = 250;
const number = (state = STAR_NUMBER, action) => {
  switch (action.type) {
    case CHANGE_STAR_NUMBER:
      return action.payload;
    default:
      return state;
  }
};

const stars = (state = [], action) => {
  switch (action.type) {
    case CHANGE_STARS:
      return action.payload;
    default:
      return state;
  }
};

const starsReducer = combineReducers({
  speed,
  number,
  stars,
});

/**
 *  Hero reducer
 */
const HERO_Y = window.innerHeight - 30;
const y = () => HERO_Y;

const HERO_X = window.innerWidth / 2;
const x = (state = HERO_X, action) => {
  switch (action.type) {
    case UPDATE_HERO_POSITION:
      return action.payload.x;
    default:
      return state;
  }
};

const heroReducer = combineReducers({
  x,
  y,
});

/**
 *  Enemies reducer
 */
const enemiesReducer = (state = [], action) => {
  switch (action.type) {
    case SPAWN_ENEMY:
      return state.concat(action.payload);
    case ENEMIES_MOVES:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  stars: starsReducer,
  hero: heroReducer,
  enemies: enemiesReducer,
});
