import React, { PropTypes } from 'react';
import Counter from './Counter';

 const Player = props => {
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
};

export default Player;
