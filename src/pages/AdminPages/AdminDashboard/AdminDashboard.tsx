import React from "react";
import { IUser, UserType } from "../../../api-types";
import {
  usePromoteDepromoteUser,
  useUsers,
} from "../../../api/userServices/user-api";
import { PageContainer } from "../../components/PageContainer";
import { NavBar } from "../../LandingPage/NavBar";
import Table from "rc-table";
import { DataTable } from "../../components/DataTable";
import { css } from "@emotion/react";
import { Button } from "../../components/Button";
import { ContentContainer } from "../../components/ContentContainer";
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

  const tableContainer = css`
    display: flex;
    justify-content: center;
  `;

  const columns = [
    {
      title: "First name",
      dataIndex: "firstName",
      key: "firstName",
      width: 200,
    },
    {
      title: "Last name",
      dataIndex: "lastName",
      key: "lastname",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 100,
    },

    {
      title: "Marina ID",
      dataIndex: "marinaId",
      key: "marinaId",
      width: 100,
    },
    {
      title: "User type",
      dataIndex: "userType",
      key: "userType",
      width: 150,
    },
    {
      title: "Action",
      dataIndex: "button",
      key: "button",
      width: 300,
    },
  ];
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
          columns={columns}
          data={userDataWithControls}
          containerCss={tableContainer}
        />
      </ContentContainer>
    </PageContainer>
  );
};
