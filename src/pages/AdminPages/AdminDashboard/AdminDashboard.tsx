import React from "react";
import { IUser } from "../../../api-types";
import { useUsers } from "../../../api/UserServices/user-api";
import { PageContainer } from "../../components/PageContainer";
import { NavBar } from "../../LandingPage/NavBar";

export const AdminDashboard = () => {
  const { data: userData, isLoading, isError } = useUsers();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }
  return (
    <PageContainer>
      <NavBar />
      <div>Admin Dashboard</div>
      {userData?.map((user, index) => (
        <>
          <div>
            {user.firstName} {user.lastName} {user.userType}
          </div>
        </>
      ))}
    </PageContainer>
  );
};
