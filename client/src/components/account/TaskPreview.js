import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskAction } from "../../actions/deleteActions";
import { getTasksByUserIdAction } from "../../actions/getDataActions";
import { postPointAction } from "../../actions/postDataActions";

export const TaskPreview = () => {
  const dispatch = useDispatch();
  const Data = useSelector(state => state.data.tasks);
  const DataBig = useSelector(state => state);
  console.log("TaskPreview -> DataBig", DataBig);
  const userName = useSelector(state => state.auth.user.name);
  const userId = useSelector(state => state.auth.user.id);

  const loadTasks = useCallback(() => {
    dispatch(getTasksByUserIdAction(userId));
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteTaskAction(id));
  };

  const handleAddPoint = id => {
    console.log(id);
    dispatch(postPointAction(id));
  };

  useEffect(() => {
    loadTasks(userId);
  }, [loadTasks]);

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
      {Data &&
        Data.map(({ _id, name, userData, date, points }) => {
          console.log("TaskPreview -> userData", userData);
          return (
            <div
              className="hey"
              style={{
                minWidth: "200px",
                maxWidth: "350px",
                margin: "auto",
                width: "100%"
              }}
              key={_id}
            >
              <div className="hey1">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{name}</span>
                    <p>{userData.userName}</p>
                  </div>
                  <div className="card-action">
                    <span>{date}</span>
                    <h4 onClick={() => handleDelete(_id)}>DELETE</h4>
                    <h4 onClick={() => handleAddPoint(_id)}>
                      Points: {points}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default TaskPreview;
