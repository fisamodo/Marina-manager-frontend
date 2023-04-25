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

  const tableContainer = css`
    display: flex;
    justify-content: center;
  `;

  const createMarinaButtonContainer = css`
    display: flex;
    justify-content: flex-end;
    margin-top: 4rem;
  `;

  const marinaDataWithControls = marinaData?.map((data) => {
    return {
      ...data,
      hasWaterSource: data.hasWaterSource ? "Available" : "Unavailable",
      hasElectricPort: data.hasElectricPort ? "Available" : "Unavailable",
      button: (
        <Button
          text={"Edit"}
          containerCss={buttonWidthStyle}
          onClick={() => console.log(data._id)}
        />
      ),
    };
  });

  const columns = [
    {
      title: "Marina name",
      dataIndex: "marinaName",
      key: "marinaName",
      width: 150,
    },
    {
      title: "Water source",
      dataIndex: "hasWaterSource",
      key: "hasWaterSource",
      width: 150,
    },
    {
      title: "Electric port",
      dataIndex: "hasElectricPort",
      key: "hasElectricPort",
      width: 150,
    },
    {
      title: "Max number of ferries",
      dataIndex: "maxNumberOfFerries",
      key: "email",
      width: 100,
    },
    {
      title: "Max number of sail boats",
      dataIndex: "maxNumberOfSailBoats",
      key: "userType",
      width: 150,
    },
    {
      title: "Max number of small boats",
      dataIndex: "maxNumberOfSmallBoats",
      key: "maxNumberOfSmallBoats",
      width: 150,
    },
    {
      title: "Max number of speed boats",
      dataIndex: "maxNumberOfSpeedBoats",
      key: "maxNumberOfSpeedBoats",
      width: 100,
    },
    {
      title: "Max number of yacths",
      dataIndex: "maxNumberOfYacths",
      key: "maxNumberOfYacths",
      width: 150,
    },
    {
      title: "Action",
      dataIndex: "button",
      key: "button",
      width: 300,
    },
  ];

  return (
    <PageContainer>
      <NavBar />
      <ContentContainer>
        <DataTable
          columns={columns}
          data={marinaDataWithControls}
          containerCss={tableContainer}
        />
        <div css={createMarinaButtonContainer}>
          <Button
            text={"Create a Marina"}
            onClick={() => navigate("/create-marina")}
          />
        </div>
      </ContentContainer>
    </PageContainer>
  );
};
