const initialState = {
  loading: false,
  lastRoutePage: '',
  globalData: {},
  loginActive: false,
  dashboardData: {},
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GLOBAL_REDUCER':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'REPLACE_GLOBAL_REDUCER':
      return {
        ...state,
        ...action.value,
      };
    case 'RESET_GLOBAL_REDUCER':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default globalReducer;
