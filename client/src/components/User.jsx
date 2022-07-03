import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";

const User = () => {
  const { account, setAccount, accountDetail } = useContext(DataContext);
  return (
    <>
      {account ? (
        <div
          className="container"
          style={{
            display: "flex",
            // flexDirection: "column",
            justifyContent: "space-evenly",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <p style={{ fontSize: 22 }}>Hello {accountDetail.username}</p>
            <p>Email: {accountDetail.email}</p>
            <p>Gender: {accountDetail.gender}</p>
            <p>Mobile: {accountDetail.mobile}</p>
          </div>
          <img src={accountDetail.image} alt="user image" width="200px" />
        </div>
      ) : (
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>No data is Available</p>
          <Link to="/login" className="btn btn-primary">
            Please Login First
          </Link>
        </div>
      )}
    </>
  );
};

export default User;
