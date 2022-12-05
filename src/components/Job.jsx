import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToFavouriteAction } from "../redux/actions";

const Job = ({ data, jobSelected }) => {
  const dispatch = useDispatch();
  return (
    <Row
      key={data.title}
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
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
