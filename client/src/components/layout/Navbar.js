import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUserAction } from "../../actions/authActions";

export const Navbar = () => {
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(logoutUserAction());
  const auth = useSelector(state => state.auth);
  const userName = useSelector(state => state.auth.user.name);

  const onLogoutClick = e => {
    logoutUser();
  };

  const authLinks = (
    <>
      <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem"
        }}
        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      >
        <Link to="/account" className="btn-flat waves-effect">
          {userName}
        </Link>
      </button>
      <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem"
        }}
        onClick={onLogoutClick}
        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      >
        Logout
      </button>
    </>
  );

  const guestLinks = (
    <button
      style={{
        width: "150px",
        borderRadius: "3px",
        letterSpacing: "1.5px",
        marginTop: "1rem"
      }}
      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    >
      Please log in
    </button>
  );

  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <Link
            to="/"
            style={{
              fontFamily: "monospace"
            }}
            className="col s5 brand-logo center black-text"
          >
            <i className="material-icons">code</i>
            Proudly
          </Link>
          {auth && auth.isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
