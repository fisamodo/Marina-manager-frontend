import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useResetUserState } from "../../stores/user-atom";
import { navbarRoutes } from "../../routes/navbarRoutes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { themeColors } from "../../utils/color-schema";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const resetUserState = useResetUserState();
  const logout = useResetUserState();

  const handleLogout = async () => {
    resetUserState();
    logout();
  };

  const navbarBackgroundStyle = css`
    background: ${themeColors.primary};
  `;
  const navbarLinksStyle = css`
    color: #fff;
    margin: 1rem 0rem;
  `;

  return (
    <Navbar css={navbarBackgroundStyle} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navbarRoutes.map(({ name, route, isAdminRoute }, index) => (
              <Nav.Link
                href={route}
                id={index.toString()!}
                css={navbarLinksStyle}
              >
                {name}
              </Nav.Link>
            ))}
            <Nav.Link css={navbarLinksStyle} onClick={() => handleLogout()}>
              Logout
            </Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
