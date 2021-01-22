import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jobActions from "../redux/actions/job.actions";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import EllipsisText from "react-ellipsis-text";

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
        <div>
          {" "}
          {jobList.map((job) => (
            <Card key={job.id} className="job-card">
              <Card.Header className="job-header">
                <div className="job-tags">
                  {job.tags.map((tag, index) => (
                    <li className="tag-li" key={index}>
                      {tag}
                    </li>
                  ))}
                </div>
                <Button
                  className="job-detail-btn"
                  variant="primary"
                  as={Link}
                  to={`/jobs/${job.id}`}
                >
                  More details
                </Button>
              </Card.Header>
              <Card.Body>
                <Card.Title>Title: {job.title}</Card.Title>
                <Card.Text>
                  City: {job.city} | District: {job.district} | Salary:{" "}
                  {job.salary}
                </Card.Text>
                <EllipsisText text={job.description} length={"90"} />
                <Link className="read-more" to={`/jobs/${job.id}`}>
                  read more
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
