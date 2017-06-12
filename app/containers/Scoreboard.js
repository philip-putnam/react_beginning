import React, { Component } from 'react';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';

export default class Scoreboard extends Component {

  state = {
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
  };

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onPlayerAdd = (name) => {
    this.state.players.push({
      name: name,
      score: 0,
      // id: nextId,
    });
    this.setState(this.state);
    // nextId += 1;
  };

  onRemovePlayer = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };

  render() {
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
};
