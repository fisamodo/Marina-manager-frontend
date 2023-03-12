import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/PageContainer";
import { Txt } from "../components/Txt";
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../stores/user-atom";
/** @jsxImportSource @emotion/react */

export const LandingPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);
  const navbarStyle = css`
    width: 100%;
    height: 5rem;
    background-color: #5da9e7;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(0);
  };

  return (
    <PageContainer>
      <nav css={navbarStyle}>
        <Txt>Marine manager</Txt>
        <Button text="Logout" onClick={handleLogout} />
      </nav>
    </PageContainer>
  );
};
