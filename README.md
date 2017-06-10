# My First React Site!

### Author: Philip Putnam

## Description

Following along with the React Basics Treehouse course (by: Jim Hoskins), this program builds a scoreboard with the ability to add players, add/subtract points to player's score, calculate/display a total score, as well as provide a working stopwatch.

## Screenshots

#### 06/10/2017
![alt text](http://raw.githubusercontent.com/philip-putnam/react_beginning/master/react_scoreboard.png)



## Instructions:

In terminal type:

1. git clone https://github.com/philip-putnam/react_beginning
2. cd react_beginning
3. npm install
4. npm run build
5. npm run start
6. navigate to 'localhost:8080' without quotes in supported web browser of your choice.

## Process:

1. cd project-name
2. npm init
3. npm i -S react
4. npm i -S react-dom
5. npm i --save-dev babel-core babel-loader babel-preset-react (npm i -D babel-core)
6. touch .babelrc
7. .babelrc > { presets: ['react'] }
8. npm i -D webpack webpack-dev-server html-webpack-plugin
9. touch webpack.config.js
10. mkdir app
11. cd app
12. touch index.html
13. touch index.js
14. mkdir components
15. cd components
16. touch App.js

## Technologies:

1. Node Packet Manager (NPM)
2. Babel
3. Webpack
4. React (JavaScript)
5. HTML, CSS

The style sheet was downloaded from Treehouse, all credits go to them and Jim Hoskins for a good set of videos!

## To-do:

#### As of 07/10/17 there are two console warnings:

1. PropTypes being called from the main React package, need to install prop-types package
2. createClass is deprecated, I believe with ES6, need to utilize new class syntax.

### MIT License

### Copyright: Philip Putnam 2017
