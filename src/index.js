import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import rootReducer from './reducers/balance'
import { Provider } from 'react-redux'
import App from './components/App'

const isProduction = process.env.NODE_ENV === 'production'
let store

if (isProduction) {
  store = createStore(rootReducer);
}
else {

  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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