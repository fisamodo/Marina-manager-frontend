import React from "react";
import { PageContainer } from "../../../components/PageContainer";
import { NavBar } from "../../../LandingPage/NavBar";
import { css } from "@emotion/react";
import { ContentContainer } from "../../../components/ContentContainer";
import { EditMarinaForm } from "./EditMarinaForm";
import { useLocation, useNavigate } from "react-router";
import { useEditMarina } from "../../../../api/marinaServices/marina-api";
import { IMarina } from "../../../../api-types";
/** @jsxImportSource @emotion/react */

export const EditMarinaPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editMarina = useEditMarina();

  const marinaData: IMarina = location.state;

  return (
    <PageContainer>
      <NavBar />
      <ContentContainer>
        <EditMarinaForm
          navigate={navigate}
          onFormSubmit={editMarina}
          marinaData={marinaData}
        />
      </ContentContainer>
    </PageContainer>
  );
};
