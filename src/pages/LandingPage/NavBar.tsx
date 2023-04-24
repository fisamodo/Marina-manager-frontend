import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCurrentUser, useResetUserState } from "../../stores/user-atom";
import { publicRoutes } from "../../routes/navbarRoutes";
import { privateRoutes } from "../../routes/navbarRoutes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { themeColors } from "../../utils/color-schema";
import { useLogoutUser } from "../../api/userServices/user-api";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [user] = useCurrentUser();
  const resetUserState = useResetUserState();
  const logout = useLogoutUser();
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
            {publicRoutes.map(({ name, route, isAdminRoute }, index) => (
              <Nav.Link
                href={route}
                id={name + "-" + index.toString()!}
                css={navbarLinksStyle}
              >
                {name}
              </Nav.Link>
            ))}
            {user.userType === "admin" &&
              privateRoutes.map(({ name, route, isAdminRoute }, index) => (
                <Nav.Link
                  href={route}
                  id={name + "-" + index.toString()!}
                  css={navbarLinksStyle}
                >
                  {name}
                </Nav.Link>
              ))}
          </Nav>
          <Nav>
            <Nav.Link
              css={navbarLinksStyle}
              className="justify-content-end"
              onClick={() => handleLogout()}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
