var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/App');

var PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
  },
  {
    name: "Philip Putnam",
    score: 999,
  },
  {
    name: "Andre the Giant",
    score: 995,
  },
  {
    name: "Jilian Anderson",
    score: 996,
  },
]

ReactDOM.render(
  <Application players={PLAYERS}/>,
  document.getElementById('app')
);
