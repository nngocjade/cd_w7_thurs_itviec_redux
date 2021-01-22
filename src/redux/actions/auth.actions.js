//auth.actions.js will have one function call login. This is a middleware. The reason why we use login as a middleware function is because redux can't do asynchronous programming. Only middlewares can do it. So we are going to call our action inside a middleware.
const login = (user) => async (dispatch) => {
  dispatch({ type: "LOADING_REQUEST" });
  try {
    if (!user || !user.email || !user.password) {
      // fail situation
      console.log("error here", user);
      dispatch({ type: "LOGIN_FAIL", payload: "give me all info" });
      return;
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: user }); // success situation
  } catch (error) {
    console.log("error", error);
  }
};
export const authAction = {
  login,
};
