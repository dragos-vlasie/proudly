import React, { useCallback, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskAction } from "../../actions/deleteActions";
import { getAccountByUserIdAction } from "../../actions/getDataActions";
import { postPointAction } from "../../actions/postDataActions";
import Task from "./Task";

export const TaskPreview = () => {
  const dispatch = useDispatch();
  const Data = useSelector(state => state.data.tasks);
  const userId = useSelector(state => state.auth.user.id);
  const [tasks, setTasks] = useState([]);

  const loadAccount = useCallback(() => {
    dispatch(getAccountByUserIdAction(userId));
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteTaskAction(id));
  };

  const handleAddPoint = (userId, taskId) => {
    dispatch(postPointAction(userId, taskId));
  };

  useEffect(() => {
    loadAccount(userId);
  }, [loadAccount]);

  useEffect(() => {
    setTasks(Data);
  });

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
        {tasks &&
          tasks.map(({ _id, name, points, date }) => {
            return (
              <Task
                key={_id}
                id={_id}
                name={name}
                points={points}
                date={date}
                userId={userId}
              />
            );
          })}
      </Container>
    </div>
  );
};
export default TaskPreview;
