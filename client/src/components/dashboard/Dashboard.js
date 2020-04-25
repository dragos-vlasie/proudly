import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../actions/getDataActions";
import InfoBoard from "../infoBoard/InfoBoard";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.data.users);
  const Data = useSelector(state => state);

  const onthisClick = e => {};

  const loadUsers = useCallback(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div
      style={{ height: "75vh", flexDirection: "column" }}
      className="container valign-wrapper"
    >
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b>
            <p className="flow-text grey-text text-darken-1">
              You are logged into a full-stack{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
            </p>
          </h4>

          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            onClick={onthisClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            data
          </button>
        </div>
      </div>
      <div className="row">
        <InfoBoard users={userData} />
      </div>
    </div>
  );
};
export default Dashboard;
