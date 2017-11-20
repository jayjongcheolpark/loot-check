import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './components/App'
import './index.css'

const isProduction = process.env.NODE_ENV === 'production'
let store

if (isProduction) {
  store = createStore(rootReducer, applyMiddleware(thunk));
}
else {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )
}

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
  , document.getElementById('root')
)