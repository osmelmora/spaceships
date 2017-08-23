import React, { Component } from 'react';
import { connect } from 'react-redux';
import canvasBuilderFactory from '../lib/canvas';
import { spaceshipMoves } from '../reducers/actions';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

class App extends Component {
  updateCanvas = () => {
    const ctx = this.canvas.getContext('2d');
    const canvasBuilder = canvasBuilderFactory(ctx);

    canvasBuilder.drawRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height,
      '#000000'
    );

    this.props.stars.forEach(star => {
      canvasBuilder.drawRect(star.x, star.y, star.size, star.size, '#ffffff');
    });
  };

  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }

  render() {
    return (
      <canvas
        ref={el => (this.canvas = el)}
        width={WIDTH}
        height={HEIGHT}
        onMouseMove={this.props.spaceshipMoves}
      />
    );
  }
}

const mapStateToProps = state => ({
  stars: state.stars,
});
export default connect(mapStateToProps, { spaceshipMoves })(App);
