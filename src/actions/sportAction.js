import axios from 'axios';
import * as constantsActions from '../utils/constants_actions';

export function fetchDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchData());
    }
  };
}

export function fetchData() {
  return dispatch => {
    dispatch(beginFetchData());
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=${
          process.env.REACT_APP_NEWS_API_KEY
        }`
      )
      .then(res => {
        dispatch(loadData(res));
      })
      .catch(error => {
        const response = error.response;

        if (response === undefined) {
          dispatch(fetchFailure(error));
        }
      });
  };
}

function shouldFetchData(state) {
  if (state === null) {
    return false;
  } else {
    return true;
  }
}

const beginFetchData = () => ({
  type: constantsActions.FETCH_DATA
});

const loadData = payload => ({
  type: constantsActions.RECEIVE_DATA,
  data: payload.data
});

const fetchFailure = () => ({
  type: constantsActions.FAILED_RECIEVE_DATA,
  error: true
});
