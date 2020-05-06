import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export const Landing = () => {
  const auth = useSelector(state => state.auth);

  if (auth.isAuthenticated) return <Redirect to="/dashboard" />;
  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row" style={{ width: "100%" }}>
        <div className="col s12 center-align">
          <h4>Proudly - track your productivity</h4>
          <br />
          <div className="col s6">
            <Button variant="primary">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  color: "white",
                  letterSpacing: "1.5px"
                }}
              >
                Register
              </Link>
            </Button>
          </div>
          <div className="col s6">
            <Button variant="primary">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  color: "white",
                  letterSpacing: "1.5px"
                }}
              >
                Log In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
