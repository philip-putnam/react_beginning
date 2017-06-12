import React from 'react';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';

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

export default Scoreboard;
