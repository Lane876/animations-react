export const modalReducer = (state = { open: false }, action) => {
  switch (action.type) {
    case "SET_OPEN":
      return {
        open: action.payload,
      };

    default:
      return state;
  }
};
