var React = require('react');
var ReactDOM = require('react-dom');

function Header(props) {
  return (
    <div className='header'>
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

function Counter(props) {
  return (
    <div className='counter'>
      <button className='counter-action decrement' onClick={function() {props.onChange(-1);}}> - </button>
      <div className='counter-score'> {props.score} </div>
      <button className='counter-action increment' onClick={function() {props.onChange(1);}}> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

function Player(props) {
  return (
    <div className='player'>
      <div className='player-name'>
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
}

var Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired,
    })).isRequired,
  },

  getDefaultProps: function() {
    return {
      title: "Scoreboard"
    }
  },

  getInitialState: function() {
    return {
      players: this.props.initialPlayers,
    };
  },

  onScoreChange: function(delta) {
    console.log('onScoreChange', delta);
  },

  render: function() {
    return (
      <div className='scoreboard'>
        <Header title={this.props.title} />

        <div className='players'>
          {this.state.players.map(function(player) {
            return (
              <Player
                onScoreChange={this.onScoreChange}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          }.bind(this))}
        </div>

      </div>
    );
  }
});

// const AppComponent = () => {
//   return <div>
//     <h1>Hello!</h1>
//     <p>Welcome to my site!</p>
//   </div>
// }

module.exports = Application;

// ReactDOM.render(
//   <Application players={PLAYERS} />,
//   document.getElementById('app')
// );
