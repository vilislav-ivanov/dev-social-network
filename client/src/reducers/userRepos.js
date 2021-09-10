import { SET_USER_REPOS, LOADING_GITHUB } from '../actions/types';

const initialState = {
  repos: null,
  loading: false,
};

const userReposReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_GITHUB:
      return {
        ...state,
        loading: true,
      };
    case SET_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReposReducer;
