import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/AuthReducer';
import { dataReducer } from './reducers/DataReducer';
import { categoriesReducer } from './reducers/CategoriesReducer';
import { postReducer } from './reducers/PostReducer';
import { actionReducer } from './reducers/ActionsReducer';

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose();

const reducers = combineReducers({
  auth: authReducer,
  data: dataReducer,
  cat: categoriesReducer,
  post: postReducer,
  acc: actionReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
