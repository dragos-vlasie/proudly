import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { editCupsValueAction } from "../../actions/postDataActions";

export const UserWaterModal = ({ id }) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [cupsValue, setCupsValue] = useState("");

  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = e => {
    setCupsValue(e.target.value);
  };

  const updateCupsValues = () => {
    var reg = /^\d*\.?\d*$/;
    const test = reg.test(cupsValue);

    if (test) {
      setError("");
      const cupsValueData = {
        value: cupsValue
      };
      dispatch(editCupsValueAction(id, cupsValueData));
      handleClose();
    } else {
      setError("Number of cups should be a number");
    }
  };

  return (
    <Card.Body>
      <Button variant="primary" type="text" size="sm" onClick={handleShow}>
        Update number of cups
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update the number of cups</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupLongTermcupsValue">
              <Form.Label>How many cups of water you had today?</Form.Label>
              <Form.Control
                onChange={onChange}
                type="text"
                // value={cupsValue}
                // placeholder={name}
              />
            </Form.Group>
            <span
              style={{
                fontStyle: "italic",
                color: "#F44336",
                display: "block",
                marginTop: "-14px",
                fontSize: "11px"
              }}
            >
              {error}
            </span>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{ justifyContent: "space-between", height: "auto" }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateCupsValues}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  );
};
export default UserWaterModal;
