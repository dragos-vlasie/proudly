import React from "react";

export const InfoBoard = ({ users }) => {
  return (
    <div
      className="InfoBoard"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      {users &&
        users.map(({ _id, name, email, date }) => {
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
                    <p></p>
                  </div>
                  <div className="card-action">
                    <a href="#">{email}</a>
                    <a href="#">{date}</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default InfoBoard;
