import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCurrentUser, useResetUserState } from "../../stores/user-atom";
import { adminRoutes, employeeRoutes } from "../../routes/navbarRoutes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { themeColors } from "../../utils/color-schema";
import { useLogoutUser } from "../../api/userServices/user-api";
import { UserType } from "../../api-types";
import { useNavigate } from "react-router";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [user] = useCurrentUser();
  const navigation = useNavigate();
  const resetUserState = useResetUserState();
  const logout = useLogoutUser();
  const handleLogout = async () => {
    navigation("/login");
    logout();
    resetUserState();
  };

  const navbarBackgroundStyle = css`
    background: ${themeColors.primary};
  `;
  const navbarLinksStyle = css`
    color: #fff;
    font-size: 1.1rem;
    letter-spacing: 2px;
    margin: 1rem 0rem;
  `;
  return (
    <Navbar css={navbarBackgroundStyle} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {employeeRoutes.map(({ name, route, isAdminRoute }, index) => (
              <Nav.Link
                href={route}
                id={name + "-" + index.toString()!}
                css={navbarLinksStyle}
              >
                {name}
              </Nav.Link>
            ))}
            {user.userType === UserType.ADMIN &&
              adminRoutes.map(({ name, route, isAdminRoute }, index) => (
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
