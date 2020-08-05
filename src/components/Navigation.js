import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { IoMdDocument } from 'react-icons/io'
import '../App.css'
import './Navigation.css';

function Navigation() {
    return (
        <Navbar variant='light' expand="xl">
          <Container>
            <Navbar.Brand href="#">
              evan zheng
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#projects">projects</Nav.Link>
                <Nav.Link href="#contacts">contacts</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="./Resume.pdf">
                  <IoMdDocument size='18px'/>
                </Nav.Link>
                <Nav.Link href="https://github.com/richmondvan">
                  <GoMarkGithub/>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
    )
}

export default Navigation;
