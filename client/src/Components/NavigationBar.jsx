import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="" fixed="top">
      <Nav className="small">
        <Nav.Link href="https://github.com/iamsam14">GitHub</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/chefsrobles">
          LinkedIn
        </Nav.Link>
        <Nav.Link
          href="https://www.dropbox.com/s/cl8nk3lkdydldm9/Sam_Resume_Developer.docx?dl=0"
          download
        >
          Resume
        </Nav.Link>
        <Nav.Link href="mailto:sam.robles.199@gmail.com">Contact</Nav.Link>
      </Nav>
    </Navbar>
    
  );
};

export default NavigationBar;
