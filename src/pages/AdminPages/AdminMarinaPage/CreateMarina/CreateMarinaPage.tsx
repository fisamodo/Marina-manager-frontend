import React from "react";
import { PageContainer } from "../../../components/PageContainer";
import { NavBar } from "../../../LandingPage/NavBar";
import { css } from "@emotion/react";
import { ContentContainer } from "../../../components/ContentContainer";
import { CreateMarinaForm } from "./CreateMarinaForm";
import { useNavigate } from "react-router";
import { useCreateMarina } from "../../../../api/marinaServices/marina-api";
/** @jsxImportSource @emotion/react */

export const CreateMarinaPage = () => {
  const navigate = useNavigate();
  const createMarina = useCreateMarina();

  return (
    <PageContainer>
      <NavBar />
      <ContentContainer>
        <CreateMarinaForm navigate={navigate} onFormSubmit={createMarina} />
      </ContentContainer>
    </PageContainer>
  );
};
