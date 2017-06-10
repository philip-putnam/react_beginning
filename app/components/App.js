var React = require('react');

function Application() {
  return (
    <div className='application'>
      <div className='header'>
        <h1>Scoreboard</h1>
      </div>

      <div className='players'>
        <div className='player'>
          <div className='player-name'>
            Jim Hoskins
          </div>
          <div className='player-score'>
            <div className='counter'>
              <button className='counter-action decrement'> - </button>
              <button className='counter-action increment'> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};




// const AppComponent = () => {
//   return <div>
//     <h1>Hello!</h1>
//     <p>Welcome to my site!</p>
//   </div>
// }

module.exports = Application;
