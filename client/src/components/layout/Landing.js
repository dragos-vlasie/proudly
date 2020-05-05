import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export const Landing = () => {
  const auth = useSelector(state => state.auth);

  if (auth.isAuthenticated) return <Redirect to="/dashboard" />;
  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row" style={{ width: "100%" }}>
        <div className="col s12 center-align">
          <h4>
            <span style={{ fontFamily: "monospace" }}>Proudly</span> track your
            productivity
          </h4>
          <br />
          <div className="col s6">
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large btn-flat waves-effect white black-text"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
