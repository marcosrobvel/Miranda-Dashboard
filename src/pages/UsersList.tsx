import * as React from "react";
import users from "../data/users";
import UsersTabs from "../components/UsersTabs";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UsersTabsProps {
  usersData: User[];
}

export default function UsersList() {
  return (
    <>
      <UsersTabs usersData={users} />
    </>
  );
}
