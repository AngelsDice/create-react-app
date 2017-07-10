import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../DevTools';

const middlewares = [];

/* istanbul ignore if */
if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({});
  middlewares.push(logger);
}

middlewares.push(thunkMiddleware);

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), DevTools.instrument()),
  );
