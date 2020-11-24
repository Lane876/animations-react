export const imageReducer = (state = { img: "" }, action) => {
  switch (action.type) {
    case "SET_IMAGE":
      return {
        img: action.payload,
      };

    default:
      return state;
  }
};
