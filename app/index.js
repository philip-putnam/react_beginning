// var React = require('react');
// var ReactDOM = require('react-dom');
// var Application = require('./components/App');
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/App';


var PLAYERS = [
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
]

ReactDOM.render(
  <Application initialPlayers={PLAYERS}/>,
  document.getElementById('app')
);
