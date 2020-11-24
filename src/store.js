import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { modalReducer } from "./redux/reducers/modalReducer";
import { imageReducer } from "./redux/reducers/imageReducer";

const reducer = combineReducers({
  showModal: modalReducer,
  showImage: imageReducer,
});

const middleware = [thunk];

const initialState = {
  showModal: { open: false },
  showImage: { img: "" },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
