import React from 'react';
import PropTypes from 'prop-types';
import { Shape } from 'react-konva';

export const UP = 'up';
export const DOWN = 'down';

const Spaceship = ({ color, width, direction, x, y }) =>
  <Shape
    fill={color}
    sceneFunc={function(ctx) {
      ctx.beginPath();
      ctx.moveTo(x - width, y);
      ctx.lineTo(x, direction === UP ? y - width : y + width);
      ctx.lineTo(x + width, y);
      ctx.lineTo(x - width, y);
      ctx.fill();

      // Konva specific method
      ctx.fillStrokeShape(this);
    }}
  />;

Spaceship.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  direction: PropTypes.oneOf([UP, DOWN]),
};

export default Spaceship;
