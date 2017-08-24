import { createSelector } from 'reselect';

/**
 *  Stars selectors
 */
const selectStarsDomain = state => state.stars;

const selectStars = createSelector(
  selectStarsDomain,
  ({ stars }) => stars
);
const selectStarsSpeed = createSelector(
  selectStarsDomain,
  ({ speed }) => speed
);
const selectStarsCount = createSelector(
  selectStarsDomain,
  ({ number }) => number
);


/**
 *  Hero selectors
 */
const selectHeroDomain = state => state.hero;

/**
 *  Enemies selectors
 */
const selectEnemies = state => state.enemies;

export {
  selectStars,
  selectStarsSpeed,
  selectStarsCount,
  selectHeroDomain,
  selectEnemies,
};
