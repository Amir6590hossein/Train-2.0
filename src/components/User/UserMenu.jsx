import React from "react";
import { Container, Navbar, Nav, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserMenu() {
  return (
    <div className="UserMenu">
      <Navbar>
        <Container>
          <Stack>
            <Navbar.Brand>Train 2.0</Navbar.Brand>
            <Nav>
              <Stack gap={3}>
                <Nav.Item>
                  {" "}
                  <Nav.Link as={Link} to={"/Projects"} className="navLink">
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} className="navLink">
                    <i class="fa-regular fa-square-plus"></i>
                    New Project
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} className="navLink">
                    <i class="fa-regular fa-user"></i>
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} className="navLink">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i> Log out
                  </Nav.Link>
                </Nav.Item>
              </Stack>
            </Nav>
          </Stack>
        </Container>
      </Navbar>
    </div>
  );
}
