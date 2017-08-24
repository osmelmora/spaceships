import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layer, Rect, Stage } from 'react-konva';
import Spaceship, { UP, DOWN } from '../components/Spaceship';
import { spaceshipMoves } from '../actions';
import { selectStars, selectHeroDomain, selectEnemies } from '../selectors';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

class CanvasContainer extends Component {
  render() {
    return (
      <Stage
        width={WIDTH}
        height={HEIGHT}
        onMouseMove={this.props.spaceshipMoves}
      >
        <Layer>
          <Rect x={0} y={0} width={WIDTH} height={HEIGHT} fill="black" />
        </Layer>
        <Layer>
          {this.props.stars.map(({ x, y, size }) =>
            <Rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={size}
              height={size}
              fill="white"
            />
          )}
        </Layer>
        <Layer>
          {this.props.enemies.map(enemy =>
            <Spaceship
              key={`${enemy.x}-${enemy.y}`}
              {...enemy}
              direction={DOWN}
              width={20}
              color="red"
            />
          )}
          <Spaceship
            {...this.props.hero}
            color="green"
            direction={UP}
            width={20}
          />
        </Layer>
      </Stage>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  stars: selectStars,
  hero: selectHeroDomain,
  enemies: selectEnemies,
});
export default connect(mapStateToProps, { spaceshipMoves })(CanvasContainer);
