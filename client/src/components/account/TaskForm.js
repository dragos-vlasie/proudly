import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from "../../actions/postDataActions";

export const TaskForm = () => {
  const [task, setTask] = useState("");

  const errors = useSelector(state => state);
  const userName = useSelector(state => state.auth.user.name);
  const userId = useSelector(state => state.auth.user.id);
  const dispatch = useDispatch();

  const onChange = e => {
    setTask(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const taskData = {
      userName: userName,
      userId: userId,
      name: task
    };
    console.log("TaskForm -> taskData", taskData);
    dispatch(addTaskAction(taskData));
  };

  return (
    <div className="TaskForm">
      <div className="container">
        <Container style={{ marginTop: "25px", marginBottom: "25px" }}>
          {/* <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8">
            <form onSubmit={onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={onChange}
                  value={task}
                  error={errors.msg}
                  id="task"
                  type="text"
                  className={classnames("", {
                    invalid: errors.msg || errors.tasknotfound
                  })}
                />
                <label htmlFor="email">Task Name</label>
                <span className="red-text">
                  {errors.msg}
                  {errors.msg}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div> */}
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Task</Form.Label>
              <Form.Control
                id="task"
                type="text"
                placeholder="Add Task Name"
                onChange={onChange}
                value={task}
                error={errors.msg}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};
export default TaskForm;
