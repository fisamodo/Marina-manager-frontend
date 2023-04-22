import React from "react";
import { IUser } from "../../../api-types";
import { useUsers } from "../../../api/UserServices/user-api";
import { PageContainer } from "../../components/PageContainer";
import { NavBar } from "../../LandingPage/NavBar";
import Table from "rc-table";
import { DataTable } from "../../components/DataTable";
import { css } from "@emotion/react";
import { Button } from "../../components/Button";
/** @jsxImportSource @emotion/react */

export const AdminDashboard = () => {
  const { data: userData, isLoading, isError } = useUsers();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }

  const tableContainer = css`
    display: flex;
    justify-content: center;
  `;

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      width: 100,
    },
    {
      title: "First name",
      dataIndex: "firstName",
      key: "firstName",
      width: 150,
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
      title: "User type",
      dataIndex: "userType",
      key: "userType",
      width: 150,
    },
    {
      title: "",
      dataIndex: "button",
      key: "button",
      width: 100,
    },
  ];
  const userDataWithControls = userData?.map((data) => {
    return {
      ...data,
      button: (
        <Button
          text="Here"
          onClick={() => console.log("Click for ", data.email)}
        />
      ),
    };
  });
  return (
    <PageContainer>
      <NavBar />
      <div>Admin Dashboard</div>

      <DataTable
        columns={columns}
        data={userDataWithControls}
        containerCss={tableContainer}
      />
    </PageContainer>
  );
};
