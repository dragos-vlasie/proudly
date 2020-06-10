import React, { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch } from "react-redux";
import {
  deleteSubTaskAction,
  deleteTaskAction
} from "../../actions/deleteActions";
import {
  editSubTaskAction,
  editTaskAction
} from "../../actions/postDataActions";

export const Task = ({ id, name, points, date, subTasks, userId }) => {
  console.log("Task -> subTasks", subTasks);
  const [show, setShow] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [task, setTask] = useState("");
  const [subTask, setSubTask] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    setVisibility(false);
  };

  const handleVisibility = () => setVisibility(true);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteTaskAction(id, userId));
    setShow(false);
    setVisibility(false);
  };

  const deleteSubTask = subTaskId => {
    console.log("Task -> userId", userId);
    const bothIds = subTaskId._id + "|" + id;
    console.log("Task -> bothIds", bothIds);
    dispatch(deleteSubTaskAction(bothIds, userId));
  };

  const onChange = e => {
    switch (e.target.id) {
      case "ControlTextarea1":
        setSubTask(e.target.value);
        break;
      case "formGroupTaskName":
        setTask(e.target.value);
        break;

      default:
        break;
    }
  };

  const taskForm = useRef();

  const handleAddSubTask = () => {
    const subTaskData = {
      name: subTask,
      subTask: true,
      checked: false
    };
    dispatch(editSubTaskAction(userId, id, subTaskData));
    setVisibility(false);
  };

  const updateTasks = () => {
    const taskData = {
      name: task
    };
    setShow(false);
    // see if task which task form has been modified and then dispatch to the correct action;
    dispatch(editTaskAction(userId, id, taskData));
  };

  const visible = {
    display: "block"
  };

  const notVisible = {
    display: "none"
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
          {subTasks &&
            subTasks.map(({ name, _id }) => {
              return (
                <>
                  <Accordion.Collapse
                    eventKey="0"
                    style={{ position: "relative" }}
                  >
                    <Card.Body
                      style={{ boxShadow: "0px 3px 3px 0px rgb(0,0,0,0.2)" }}
                    >
                      {name}
                      <Button
                        variant="danger"
                        size="sm"
                        style={{
                          position: "absolute",
                          right: "5px",
                          top: "0",
                          bottom: "0",
                          margin: "auto",
                          height: "28px"
                        }}
                        onClick={() => deleteSubTask({ _id })}
                      >
                        Delete
                      </Button>{" "}
                    </Card.Body>
                  </Accordion.Collapse>
                </>
              );
            })}
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
              <Form.Group controlId="formGroupTaskName">
                <Form.Label>Edit Long Term Task</Form.Label>
                <Form.Control
                  ref={taskForm}
                  onChange={onChange}
                  type="text"
                  value={task}
                  placeholder={name}
                />
              </Form.Group>
            </Form>
            <Form style={{ position: "relative" }}>
              <Form.Group controlId="ControlTextarea1">
                <Form.Label>Add description/task</Form.Label>
                <Form.Control
                  value={subTask}
                  onChange={onChange}
                  as="textarea"
                  rows="3"
                />
              </Form.Group>
              <Button
                disabled={subTask.length === 0 ? true : false}
                variant="primary"
                size="sm"
                onClick={handleAddSubTask}
              >
                Add SubTask
              </Button>{" "}
            </Form>
          </Modal.Body>
          <Modal.Footer
            style={{ justifyContent: "space-between", height: "auto" }}
          >
            <OverlayTrigger
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
