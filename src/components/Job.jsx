import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToFavouriteAction } from "../redux/actions";

const Job = ({ jobSelected }) => {
  const dispatch = useDispatch();
  return (
    <Row
      id="grow-1"
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${jobSelected.company_name}`}>
          {jobSelected.company_name}
        </Link>
      </Col>
      <Col xs={9}>
        <a href={jobSelected.url} target="_blank" rel="noreferrer">
          {jobSelected.title}
        </a>
      </Col>
      <Col className="mt-3">
        <Button
          color="primary"
          onClick={() => {
            dispatch(addToFavouriteAction(jobSelected));
          }}
        >
          ADD TO FAVOURITE JOB{" "}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
