import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar className="bg-light shadow">
        <Container>
          <Navbar.Brand href="#home" style={{textShadow:"0 0 2px azure"}}>
          <i className="fa-duotone fa-solid fa-users-between-lines" style={{color: "#00b303",}} />{" "}
            <b className="">Employee Manager</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
