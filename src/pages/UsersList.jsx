import * as React from "react";
import usersData from "../data/users.json";
import BookingTabs from "../components/BookingTabs.jsx";
import UsersTabs from "../components/UsersTabs.jsx";

export default function UsersList() {
  return (
    <>
      <UsersTabs usersData={usersData}/>
    </>
  );
}
