import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUserAction } from "../../actions/authActions";

export const Header = () => {
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(logoutUserAction());
  const auth = useSelector(state => state.auth);
  const userName = useSelector(state => state.auth.user.name);

  const onLogoutClick = e => {
    logoutUser();
  };

  const authLinks = (
    <>
      <Nav.Item>
        <Link to="/account" className="nav-link">
          {userName}'Account
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
      </Nav.Item>
      <Nav className="justify-content-end flex-grow-1">
        <Nav.Item>
          <Link to="/" className="nav-link">
            Logout
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );

  const guestLinks = (
    <Nav.Item>
      <Link to="/login" className="nav-link">
        Please log in
      </Link>
    </Nav.Item>
  );

  return (
    <Navbar
      expand="sm"
      style={{ marginBottom: "20px", height: "auto" }}
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand>Proudly</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto w-100">
          {auth && auth.isAuthenticated ? authLinks : guestLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
