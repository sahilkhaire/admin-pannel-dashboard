import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

export function configureStore(initialState) {

  let store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
