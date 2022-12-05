import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const cart = useSelector((store) => store.job.content);
  return (
    <Col className="ml-auto mt-3 mb-4">
      {cart && <span className="ml-2 ml-3">JOB SAVED:{cart.length}</span>}
      <Button color="primary" onClick={() => navigate("/:companyName")}>
        <span className="ml-2">GO TO JOB SAVED</span>
      </Button>
    </Col>
  );
};

export default SideBar;
