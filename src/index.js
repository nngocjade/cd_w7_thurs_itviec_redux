import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store/store";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======
>>>>>>> d7ef35dbd04e46f008460ce56411d21df1240d24

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <BrowserRouter>
        <App />
      </BrowserRouter>
=======
      <App />
>>>>>>> d7ef35dbd04e46f008460ce56411d21df1240d24
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log  results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
