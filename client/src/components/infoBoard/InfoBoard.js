import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { useSelector } from "react-redux";
import UserWaterModal from "./UserWaterModal";

export const InfoBoard = () => {
  const auth = useSelector(state => state.auth);
  const staes = useSelector(state => state);
  console.log("InfoBoard -> staes first call", staes);
  const [users, setUsers] = useState([]);
  let usersData = useSelector(state => state.data.users);

  useEffect(() => {
    setUsers(usersData);
    console.log("InfoBoard -> usersData", usersData);
  }, [usersData]);

  // function interval(params) {
  //   setInterval(function () {
  //     console.log("interval -> every 5 seconds", staes);
  //   }, 5000);
  // }

  // interval();
  return (
    <div
      className="InfoBoard"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%"
      }}
    >
      {users &&
        users
          .sort(function (a, b) {
            var nameA = a.cupsOfWater;
            var nameB = b.cupsOfWater;
            return nameB - nameA;
          })
          .map(({ _id, name, email, date, cupsOfWater }) => {
            return (
              <Card style={{ width: "18rem" }} key={_id}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Card.Header>Cups of water: {cupsOfWater}</Card.Header>
                  </ListGroupItem>
                  <ListGroupItem>Email : {email}</ListGroupItem>
                  <ListGroupItem>Joined on : {date.slice(0, 10)}</ListGroupItem>
                </ListGroup>
                {auth && auth.user.id == _id ? (
                  <UserWaterModal id={_id} />
                ) : (
                  <Card.Body>
                    <Button
                      style={{
                        background: "none",
                        boxShadow: "none",
                        border: "none"
                      }}
                      type="text"
                      size="sm"
                    ></Button>
                  </Card.Body>
                )}
              </Card>
            );
          })}
    </div>
  );
};
export default InfoBoard;
