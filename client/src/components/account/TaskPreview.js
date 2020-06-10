import React, { useCallback, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAccountByUserIdAction } from "../../actions/getDataActions";
import Task from "./Task";

export const TaskPreview = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  console.log("TaskPreview -> data", data);
  const [tasks, setTasks] = useState([]);

  const loadAccount = useCallback(() => {
    dispatch(getAccountByUserIdAction(data.auth.user.id));
  }, [dispatch, data.auth.user.id]);

  // const handleDelete = id => {
  //   dispatch(deleteTaskAction(id));
  // };

  // const handleAddPoint = (userId, taskId) => {
  //   dispatch(postPointAction(userId, taskId));
  // };

  useEffect(() => {
    loadAccount(data.auth.user.id);
  }, [loadAccount, data.auth.user.id]);

  useEffect(() => {
    setTasks(data.data.tasks);
  }, [data.data.tasks]);

  return (
    <div
      className="TaskPreview"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      <Container>
        {tasks && tasks.length ? (
          tasks.map(({ _id, name, points, date, subTasks }) => {
            return (
              <Task
                key={_id}
                id={_id}
                name={name}
                points={points}
                date={date}
                userId={data.auth.user.id}
                subTasks={subTasks}
              />
            );
          })
        ) : (
          <p>No task added yet or check your internet connection</p>
        )}
      </Container>
    </div>
  );
};
export default TaskPreview;
