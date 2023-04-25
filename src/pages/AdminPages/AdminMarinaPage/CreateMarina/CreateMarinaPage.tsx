import React from "react";
import { PageContainer } from "../../../components/PageContainer";
import { NavBar } from "../../../LandingPage/NavBar";
import { css } from "@emotion/react";
import { ContentContainer } from "../../../components/ContentContainer";
import { CreateMarinaForm } from "./CreateMarinaForm";
/** @jsxImportSource @emotion/react */

export const CreateMarinaPage = () => {
  const contentContainer = css`
    padding: 2rem;
  `;
  return (
    <PageContainer>
      <NavBar />
      <ContentContainer>
        <div>CreateMarinaPage</div>
        <CreateMarinaForm />
      </ContentContainer>
    </PageContainer>
  );
};
