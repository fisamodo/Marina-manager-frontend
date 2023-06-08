import React from "react";
import { UserType } from "../../../api-types";
import {
  usePromoteDepromoteUser,
  useUsers,
} from "../../../api/userServices/user-api";
import { PageContainer } from "../../components/PageContainer";
import { NavBar } from "../../LandingPage/NavBar";
import { DataTable } from "../../components/DataTable";
import { css } from "@emotion/react";
import { Button } from "../../components/Button";
import { ContentContainer } from "../../components/ContentContainer";
import { adminDashboardTableSchemaColumns } from "../../../utils/table-schema";
/** @jsxImportSource @emotion/react */

export const AdminDashboard = () => {
  const { data: userData, isLoading, isError } = useUsers();
  const promoteDepromoteUser = usePromoteDepromoteUser();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }

  const buttonWidthStyle = css`
    width: 100%;
  `;

  const userDataWithControls = userData?.map((data, index) => {
    const promotion = data.userType === UserType.ADMIN ? "employee" : "admin";
    return {
      ...data,
      button: (
        <div id={index.toString()}>
          <Button
            text={`${
              promotion === "admin" ? "Promote" : "Depromote"
            } to ${promotion}`}
            onClick={() => promoteDepromoteUser(data._id)}
            disabled={data.userType === UserType.ADMIN && true}
            containerCss={buttonWidthStyle}
          />
        </div>
      ),
    };
  });
  return (
    <PageContainer>
      <NavBar />
      <ContentContainer>
        <div>Admin Dashboard</div>
        <DataTable
          columns={adminDashboardTableSchemaColumns}
          data={userDataWithControls}
        />
      </ContentContainer>
    </PageContainer>
  );
};
