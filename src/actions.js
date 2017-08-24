import { SPACESHIP_MOVES } from './constants';

export function spaceshipMoves(event) {
  return {
    type: SPACESHIP_MOVES,
    payload: event,
  };
}
