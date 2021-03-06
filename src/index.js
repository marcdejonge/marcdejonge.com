import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './view/Root'
import DevTools from './view/DevTools'
import { configureStore } from './model'

const store = configureStore({})

if (module.hot) {
  console.log( 'Enabled hot reloading' )

  render(
    <Provider store={store}>
      <div>
        <Root />
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('root')
  )

  module.hot.accept('./view/Root', () => {
    const RootContainer = require('./view/Root').default
    render(
      <Provider store={store}>
        <div>
          <RootContainer />
          <DevTools />
        </div>
      </Provider>,
      document.getElementById('root')
    )
  })

  module.hot.accept('./model', () => {
    var cr = require('./model').createReducer
    store.replaceReducer(cr())
  })
} else {
  render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('root')
  )
}