import React from 'react';
import axios from 'axios';
import './App.css';
import JokeCard from './components/JokeCard';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(reducer, applyMiddleware(thunk, logger))
console.log(store.getState());


function App(props) {
  console.log(props);

  // axios
  // .get('https://official-joke-api.appspot.com/random_ten')
  // .then(res => {console.log(res.data)})
  // .catch(err => {console.log(err)});

  return (
    <div className="App">
      <h1>Welcome to the joke app!</h1>
      <JokeCard />
    </div>
  );
}

export default App;