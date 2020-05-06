import React, { useCallback, useEffect } from "react";
import Container from "react-bootstrap/Container";
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
    <Container>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b>
            <p
              className="flow-text grey-text text-darken-1"
              style={{ marginTop: "14.5px" }}
            >
              Welcome to Proudly app
            </p>
            <b>Here you can see the other users currently using the app</b>
          </h4>
        </div>
      </div>

      <InfoBoard />
    </Container>
  );
};
export default Dashboard;
