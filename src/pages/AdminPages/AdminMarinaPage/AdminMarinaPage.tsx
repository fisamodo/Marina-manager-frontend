import React from "react";
import { useMarinas } from "../../../api/marinaServices/marina-api";
import { Button } from "../../components/Button";
import { DataTable } from "../../components/DataTable";
import { PageContainer } from "../../components/PageContainer";
import { NavBar } from "../../LandingPage/NavBar";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { ContentContainer } from "../../components/ContentContainer";
import { adminMarinaPageTableScehmaColumns } from "../../../utils/table-schema";

export const AdminMarinaPage = () => {
  const { data: marinaData, isLoading, isError } = useMarinas();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }

  const buttonWidthStyle = css`
    width: 100%;
  `;

  const createMarinaButtonContainer = css`
    display: flex;
    justify-content: flex-end;
    margin-top: 4rem;
  `;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const marinaDataWithControls = marinaData?.map((data, index) => {
    return {
      ...data,
      hasWaterSource: data.hasWaterSource ? "Available" : "Unavailable",
      hasElectricPort: data.hasElectricPort ? "Available" : "Unavailable",
      button: (
        <div id={index.toString()}>
          <Button
            text={"Edit"}
            containerCss={buttonWidthStyle}
            onClick={() => navigate("/edit-marina", { state: data })}
          />
        </div>
      ),
    };
  });

  return (
    <PageContainer>
      <NavBar />
      <ContentContainer>
        <DataTable
          columns={adminMarinaPageTableScehmaColumns}
          data={marinaDataWithControls}
        />
        <ContentContainer containerCss={createMarinaButtonContainer}>
          <Button
            text={"Create a Marina"}
            onClick={() => navigate("/create-marina")}
          />
        </ContentContainer>
      </ContentContainer>
    </PageContainer>
  );
};
