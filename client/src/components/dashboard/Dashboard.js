import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersAction } from "../../actions/getDataActions";
import InfoBoard from "../infoBoard/InfoBoard";

export const Dashboard = () => {
  const dispatch = useDispatch();

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
              Welcome to Proudly app 👏
            </p>
          </h4>
        </div>
      </div>

      <InfoBoard />
    </div>
  );
};
export default Dashboard;
