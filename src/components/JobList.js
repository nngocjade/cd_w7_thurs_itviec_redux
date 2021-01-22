import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jobActions from "../redux/actions/job.actions";

const JobList = () => {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.job.jobs);
  const loading = useSelector((state) => state.job.loading);
  console.log("jobList", jobList);
  useEffect(() => {
    dispatch(jobActions.getJobData());
  }, [dispatch]);

  return (
    <div className="JobList-container">
      {loading ? (
        <h1>I AM LOADING</h1>
      ) : (
        <ul>
          {jobList.map((job) => (
            <div>
              <h3 key={job.id}>
                Title: {job.title} | Salary: {job.salary}
              </h3>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
