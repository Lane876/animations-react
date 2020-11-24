export const setModal = (data) => (dispatch) => {
  dispatch({
    type: "SET_OPEN",
    payload: data,
  });
};
export const setImage = (data) => (dispatch) => {
  dispatch({
    type: "SET_IMAGE",
    payload: data,
  });
};
