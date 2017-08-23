import Rx from 'rxjs/Rx';
import { CHANGE_STARS } from '../reducers/constants';

const starsEpic = (action$, store) => {
  const NUMBER = store.getState().number;
  const SPEED = store.getState().speed;

  return Rx.Observable
    .range(1, NUMBER)
    .map(() => ({
      x: parseInt(Math.random() * window.innerWidth, 10),
      y: parseInt(Math.random() * window.innerHeight, 10),
      size: Math.random() * 3 + 1,
    }))
    .toArray()
    .flatMap(starArray =>
      Rx.Observable.interval(SPEED).map(() => {
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

export default starsEpic;
