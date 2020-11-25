export const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_OPEN":
      return {
        open: action.payload,
      };

    default:
      return state;
  }
};
