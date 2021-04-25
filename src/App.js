import React from 'react';
import HomePage from './container/HomePage'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import Reducer from './store/Reducer'
import thunk from 'redux-thunk'



function App() {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)))


  return (
    <Provider store={store}>

<HomePage/>
</Provider>
  );
}

export default App;
