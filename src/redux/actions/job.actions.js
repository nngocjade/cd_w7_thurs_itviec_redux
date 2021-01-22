const getJobData = () => async (dispatch) => {
  dispatch({ type: "JOB_REQUEST", payload: null });
  try {
    let url = `http://localhost:3001/jobs`;
    console.log("url", url);
    let response = await fetch(url);
    let data = await response.json();
    console.log("rr", data);
    dispatch({ type: "JOB_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "JOB_REQUEST_FAIL", payload: error });
  }
};

const getSingleJob = (id) => async (dispatch) => {
  try {
    let url = `http://localhost:3001/jobs/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data: ", data);
    dispatch({ type: "SINGLE_JOB_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    console.log("error", error);
  }
};

const jobAction = {
  getJobData,
  getSingleJob,
};

export default jobAction;
