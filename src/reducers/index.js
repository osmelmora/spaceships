import { combineReducers } from 'redux';
import { CHANGE_SPEED, CHANGE_STAR_NUMBER, CHANGE_STARS } from './constants';

// export const CHANGE_SPEED = 'spaceships/stars/CHANGE_SPEED';
// export const CHANGE_STAR_NUMBER = 'spaceships/stars/CHANGE_STAR_NUMBER';
// export const CHANGE_STARS = 'spaceships/stars/CHANGE_STARS';

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

export default combineReducers({
  speed,
  number,
  stars,
});
