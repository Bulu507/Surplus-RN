export const setGlobal = (key, value) => (dispatch) => {
  dispatch({type: 'SET_GLOBAL_REDUCER', key: key, value: value});
};

export const replaceGlobal = (params) => (dispatch) => {
  dispatch({type: 'REPLACE_GLOBAL_REDUCER', value: params});
};

export const resetGlobal = () => (dispatch) => {
  dispatch({type: 'RESET_GLOBAL_REDUCER'});
};
