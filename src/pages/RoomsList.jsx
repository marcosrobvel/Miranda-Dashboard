import * as React from "react";
import roomsData from "../data/rooms.js";
import RoomsTable from "../components/RoomsTable.jsx";

export default function RoomsList() {
  return (
    <>
      <RoomsTable roomsData={roomsData}/>
    </>
  );
}
