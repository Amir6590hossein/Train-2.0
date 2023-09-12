export const addUser = (user) => {
  return async (dispatch) => {
    await dispatch({ type: "ADD_USER", payload: user });
  };
};
export const clearUser = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_USER", payload: {} });
  };
};