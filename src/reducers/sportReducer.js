import * as constantsActions from '../utils/constants_actions';

const homePageReducer = (
  state = {
    isLoading: true,
    data: [],
    error: null
  },
  actiona
) => {
  switch (action.type) {
    case constantsActions.FETCH_DATA:
      return Object.assign({}, state, {
        isLoading: true
      });

    case constantsActions.RECEIVE_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data.articles
      });

    case constantsActions.FAILED_RECIEVE_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });

    default:
      return state;
  }
};

export default homePageReducer;
