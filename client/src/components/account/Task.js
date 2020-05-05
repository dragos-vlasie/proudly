import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskAction } from "../../actions/deleteActions";

export const Task = ({ id, name, points, date, userId }) => {
  console.log("Task -> _id", id);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteTaskAction(id, userId));
    setShow(false);
  };
  const updateTasks = id => {
    console.log("Task -> id", "this should be another action add to to do");
  };

  return (
    <Accordion style={{ width: "100%" }}>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          style={{ paddingRight: "58px", position: "relative" }}
        >
          {name}
          <Button
            variant="warning"
            size="sm"
            style={{
              position: "absolute",
              right: "5px",
              top: "0",
              bottom: "0",
              margin: "auto",
              height: "28px"
            }}
            onClick={handleShow}
          >
            Edit
          </Button>{" "}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! this can be a sub-task</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupLongTermTask">
              <Form.Label>Edit Long Term Task</Form.Label>
              <Form.Control type="text" placeholder={name} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Edit Small Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Small task name to be addded"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{ justifyContent: "space-between", height: "auto" }}
        >
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateTasks}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Accordion>
  );
};
export default Task;
