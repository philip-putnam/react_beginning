import React, { Component, PropTypes } from 'react';

export default class Stopwatch extends Component {
  state = {
    running: false,
    elapsedTime: 0,
    previousTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.onTick);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onStart = () => {
    this.setState({
      running: true,
      previousTime: Date.now(),
    });
  },

  onStop = () => {
    this.setState({ running: false });
  },

  onReset = () => {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now(),
    });
  },

  onTick = () => {
    if (this.state.running) {
      var now = Date.now();
      this.setState({
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
        previousTime: Date.now(),
      });
    }
  },
}
