import React from "react";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <Container>
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          className="text-center"
          style={{ fontSize: "30px", fontWeight: 700 }}
        >
          Assignment for login And Registration
        </p>
      </div>
    </Container>
  );
};

export default Home;
