import React, { useContext, useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { account, setAccount } = useContext(DataContext);

  const navigate = useNavigate();

  const clickLogout = () => {
    setAccount("");
    navigate("/");
  };
  return (
    <>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Assignment
              </Link>
            </Navbar.Brand>

            <Nav className="mr-auto">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "white", padding: 15 }}
              >
                Home
              </Link>

              {account ? (
                <span></span>
              ) : (
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: 15,
                  }}
                >
                  Register
                </Link>
              )}

              {account ? (
                <div
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <tooltip title="About Farhan">
                    <Link
                      to="/user"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        textTranform: "capitalize",
                        fontWeight: 600,
                        paddingRight: 10,
                      }}
                    >
                      {account}
                    </Link>
                  </tooltip>
                  <button className="btn btn-primary" onClick={clickLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: 15,
                  }}
                >
                  Login
                </Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
