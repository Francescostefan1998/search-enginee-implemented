import { Card } from "react-bootstrap";

const JobSel = ({ jobs, changejob, jobSelected }) => (
  <Card
    className={jobSelected?._id === jobs._id ? "custom-border mt-3" : "mt-3"}
    onClick={() => changejob(jobs)}
    style={{ cursor: "pointer" }}
  >
    <Card.Body className="d-flex">
      <img className="jobs-image" src={jobs.imageUrl} alt="jobs cover" />
      <div>
        <Card.Text className="font-weight-bold">{jobs.title}</Card.Text>
        <p>{jobs.price}$</p>
      </div>
    </Card.Body>
  </Card>
);

export default JobSel;
