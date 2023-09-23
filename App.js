import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import TopMenu from "./TopMenu";
import Toast from './Toast'; // Import the Toast component

function App() {
  return (
    <Container style={{ width: "480px" }}>
      <Row>
        <Col>
          {/* Top-level container */}
          
          <Routes>
            {/* Define your routes */}
            <Route
              path="/"
              element={<TopMenu />} // Render TopMenu by default when the path is "/"
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Add more routes here as needed */}
          </Routes>
          
            
          <Toast/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
