import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reducer as beeReducer, middleware as beeMiddleware } from "redux-bees";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [thunkMiddleware, createLogger(), beeMiddleware];
// if(process.env.NODE_ENV ==='development'){
//   middlewares.push(require('redux-logger'). createLogger)
// }
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);
const reducers = combineReducers({
  // your other reducer
  bees: beeReducer
});

export default function configStore() {
  const store = createStore(reducers, enhancer);
  return store;
}
