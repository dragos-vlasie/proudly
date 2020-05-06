import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch } from "react-redux";
import { deleteTaskAction } from "../../actions/deleteActions";
import { editTaskAction } from "../../actions/postDataActions";

export const Task = ({ id, name, points, date, userId, subTasks }) => {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteTaskAction(id, userId));
    setShow(false);
  };

  const onChange = e => {
    if (e.target.value !== name) {
      setTask(e.target.value);
    }
  };

  const updateTasks = () => {
    const taskData = {
      name: task
    };
    setShow(false);
    dispatch(editTaskAction(userId, id, taskData));
  };

  return (
    <>
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
        <Modal
          show={show}
          onHide={handleClose}
          style={{ boxShadow: "none", background: "none" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit your tasks here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formGroupLongTermTask">
                <Form.Label>Edit Long Term Task</Form.Label>
                <Form.Control
                  onChange={onChange}
                  type="text"
                  value={task}
                  placeholder={name}
                />
              </Form.Group>

              {subTasks && subTasks.length ? (
                <Form.Group>
                  <Form.Label>Edit Small Task</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Small task name to be addded"
                  />
                </Form.Group>
              ) : null}
            </Form>
          </Modal.Body>
          <Modal.Footer
            style={{ justifyContent: "space-between", height: "auto" }}
          >
            <OverlayTrigger
              key="top"
              placement={"top"}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>This will remove the task</strong>.
                </Tooltip>
              }
            >
              <Button variant="danger" onClick={handleDelete}>
                Completed
              </Button>
            </OverlayTrigger>{" "}
            <OverlayTrigger
              key="top"
              placement={"top"}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>This will close the modal</strong>.
                </Tooltip>
              }
            >
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </OverlayTrigger>{" "}
            <OverlayTrigger
              key="top"
              placement={"top"}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>This will update the task name</strong>.
                </Tooltip>
              }
            >
              <Button variant="primary" onClick={updateTasks}>
                Save Changes
              </Button>
            </OverlayTrigger>{" "}
          </Modal.Footer>
        </Modal>
      </Accordion>
    </>
  );
};
export default Task;
