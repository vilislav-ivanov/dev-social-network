import axios from 'axios';

import { SET_ERRORS, LOADING_GITHUB, SET_USER_REPOS } from './types';

export const getGithubByUsername = (username) => (dispatch) => {
  dispatch({ type: LOADING_GITHUB });
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => {
      if (res.data && res.data.repos_url) {
        axios.get(res.data.repos_url).then((reposResponse) => {
          const repos = reposResponse.data;
          const payload = [];
          repos.forEach((repo) => {
            payload.push({
              name: repo.name,
              stars: repo.stargazers_count,
              watchers: repo.watchers_count,
              description: repo.description,
              url: repo.html_url,
            });
          });

          dispatch({
            type: SET_USER_REPOS,
            payload,
          });
        });
      } else {
        dispatch({
          type: SET_USER_REPOS,
          payload: {},
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
