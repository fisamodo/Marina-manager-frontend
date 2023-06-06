import React from "react";
import { PageContainer } from "../components/PageContainer";
import { NavBar } from "../LandingPage/NavBar";
import { ContentContainer } from "../components/ContentContainer";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMarinaWithCurrentOccupancy } from "../../api/marinaServices/marina-api";
import { useCurrentUser } from "../../stores/user-atom";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { MarinaOccupationStats } from "./MarinaOccupationStats";

export const OccupationsPage = () => {
  const navigate = useNavigate();
  const [user] = useCurrentUser();
  const { data: marinaData, isLoading: marinaIsLoading } =
    useMarinaWithCurrentOccupancy(user.marinaId);

  if (marinaIsLoading) {
    return <div>Loading...</div>;
  }
  return (
    <PageContainer>
      <NavBar />
      <MarinaOccupationStats
        marina={marinaData?.marina!}
        occupationStats={marinaData?.occupancy!}
      />
      <ContentContainer>
        The marina that you belong to: {marinaData?.marina.marinaName}
        <Button
          text={"Create a new occupation"}
          onClick={() => navigate("/create-occupations")}
        />
      </ContentContainer>
    </PageContainer>
  );
};
