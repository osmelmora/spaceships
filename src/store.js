import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import epics from './epics';

const epicMiddleware = createEpicMiddleware(epics);

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(epicMiddleware)
  );
  return store;
}
