import React from 'react';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats';

const INITIAL_STATE = {
  players: [
    {
      name: "Jim Hoskins",
      score: 31,
      id: 1,
    },
    {
      name: "Philip Putnam",
      score: 999,
      id: 2,
    },
    {
      name: "Andre the Giant",
      score: 995,
      id: 3,
    },
    {
      name: "Jilian Anderson",
      score: 996,
      id: 4,
    },
  ],
}

const Scoreboard = React.createClass({
  getInitialState: function() {
    return INITIAL_STATE;
  },

  onScoreChange: function(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  onPlayerAdd: function(name) {
    this.state.players.push({
      name: name,
      score: 0,
      // id: nextId,
    });
    this.setState(this.state);
    // nextId += 1;
  },

  onRemovePlayer: function(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },

  render: function() {
    return (
      <div className='scoreboard'>
        <Header players={this.state.players} />
        <div className='players'>
          {this.state.players.map(function(player, index) {
            return (
              <Player
                onScoreChange={(delta) => this.onScoreChange(index, delta)}
                onRemove={() => this.onRemovePlayer(index)}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
});

function Header(props) {
  return (
    <div className='header'>
      <Stats players={props.players} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  );
}

Header.propTypes = {
  players: React.PropTypes.array.isRequired,
};

function Player(props) {
  return (
    <div className='player'>
      <div className='player-name'>
        <a className='remove-player' onClick={props.onRemove}>X</a>
        {props.name}
      </div>
      <div className='player-score'>
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
}

const AddPlayerForm = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return { name: "" };
  },

  onNameChange: function(e) {
    const name = e.target.value;
    this.setState({ name: name });
  },

  onSubmit: function(e) {
    if (e) e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: "" });
  },

  render: function() {
    return (
      <div className='add-player-form'>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Player Name"
          />
          <input type='submit' value='Add Player' />
        </form>
      </div>
    );
  }
});

export default Scoreboard;
