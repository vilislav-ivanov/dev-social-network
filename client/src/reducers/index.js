import { combineReducers } from 'redux';

import authReducer from './auth';
import errorReducer from './error';
import profileReducer from './profile';
import postReducer from './post';
import userReposReducer from './userRepos';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  repos: userReposReducer,
});

export default rootReducer;
