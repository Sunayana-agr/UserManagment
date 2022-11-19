import thunkMiddleware from 'redux-thunk';
import { applyMiddleware,createStore,combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import { userReducer } from './User/userReducer';

const rootReducer= combineReducers({
  userReducer
})
const configureStore = ()=>{
  const middleware=[thunkMiddleware];
  const middlewareEnhancer =applyMiddleware(...middleware);
  const enhancer=[middlewareEnhancer];
  const composedEnhancers=composeWithDevTools(...enhancer);
  const store = createStore(rootReducer,{},composedEnhancers);
  return store;
}

export default configureStore;
