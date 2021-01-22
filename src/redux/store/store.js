//WHERE DATA IS KEPT / STORED
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

//WHAT IS REDUX THUNK?
//is middleware that allows you to return functions, rather than just actions, within redux. This allows for delayed actions, including working with promises.
// - a middleware
// - allows you to return a function INSTEAD OF an action
//      - this function receives the store's dispatch method
//      - then, used to dispatch regular synchronous actions inside the function's body
//      - once, the asynchronous operations have been completed
// - this allows for delayed actions, including working with promises

//WHAT IS applyMiddleware?
// - is a function that applies a middleware to your store
// - we can put multiple middlwares as arguments
