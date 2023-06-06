import React from "react";
import { css } from "@emotion/react";
import { CreateOccupationsForm } from "./CreateOccupationsForm";
import { useNavigate } from "react-router";
import {
  useCreateMarina,
  useMarina,
} from "../../../api/marinaServices/marina-api";
import { NavBar } from "../../LandingPage/NavBar";
import { PageContainer } from "../../components/PageContainer";
import { ContentContainer } from "../../components/ContentContainer";
import { useCreateOccupations } from "../../../api/occupationsServices/occupations-api";
import { useCurrentUser } from "../../../stores/user-atom";
/** @jsxImportSource @emotion/react */

export const CreateOccupationsPage = () => {
  const [user] = useCurrentUser();
  const navigate = useNavigate();
  const createMarina = useCreateOccupations();
  const { data: marinaData, isLoading: marinaIsLoading } = useMarina(
    user.marinaId
  );

  if (marinaIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer>
      <NavBar />
      <ContentContainer>
        <CreateOccupationsForm
          navigate={navigate}
          marina={marinaData!}
          onFormSubmit={createMarina}
        />
      </ContentContainer>
    </PageContainer>
  );
};
