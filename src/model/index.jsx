import { createStore, combineReducers, compose } from 'redux'
import { persistState } from 'redux-devtools'
import counter from './counter'
import DevTools from '../view/DevTools'

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
)

export function createReducer() {
    return combineReducers({
        counter
    });
}

export function configureStore(initialState) {
    return createStore(createReducer(), initialState, enhancer);
}
