import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import BlogDetailReducer from './BlogDetailReducer';


const AppReducer = combineReducers({
  UserReducer:UserReducer,
  PostReducer:PostReducer,
  BlogDetailReducer:BlogDetailReducer
  
});

const RootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return AppReducer(undefined, action)
  }

  return AppReducer(state, action)
}

export default RootReducer;
