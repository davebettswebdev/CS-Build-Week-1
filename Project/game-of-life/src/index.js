import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {
  render() {
    return (
      <div>
        Grid
      </div>
    )
  }
}

class Container extends React.Component {
    constructor() {
      super();
      this.state = {
        generation: 0,
      }
    }

    render() {
        return (
            <div>
                <h1>Conway's Game of Life</h1>
                <Grid
                />
                <h2>Generations: {this.state.generation}</h2>    
            </div>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));