import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";

const MainSearch = () => {
  //const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("web");
  const areJobsError = useSelector((state) => state.work.isError);
  const areJobsLoading = useSelector((state) => state.work.isLoading);
  console.log(query);
  const dispatch = useDispatch();
  const jobsFromRedux = useSelector((state) => state.work.stock);
  console.log(jobsFromRedux);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };

  useEffect(() => {
    dispatch(getJobsAction(query));
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
      </Row>
      {areJobsLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Col className="mt-5">
          {!areJobsError ? (
            <Col xs={10} className="mx-auto mb-5">
              {jobsFromRedux.map((jobData) => (
                <Job key={jobData._id} jobSelected={jobData} />
              ))}
            </Col>
          ) : (
            <Row id="block">
              <Col sm={12}>
                {areJobsError ? (
                  <Alert variant="danger" className="text-center">
                    Whoopsie, something went wrong 🥲
                  </Alert>
                ) : (
                  <>
                    {!areJobsLoading && <h3>Start by clicking on a book!</h3>}
                  </>
                )}
              </Col>
            </Row>
          )}
        </Col>
      )}
    </Container>
  );
};

export default MainSearch;
