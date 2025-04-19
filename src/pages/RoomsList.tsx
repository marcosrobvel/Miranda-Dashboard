import * as React from "react";
import roomsData from "../data/rooms";
import RoomsTable from "../components/RoomsTable";

interface Room {
  id: number;
  photo: string;
  roomNumber: string;
  roomType: string;
  amenities: string;
  price: string;
  offer_price: string;
  status: string;
}

interface RoomsListProps {
  roomsData: Room[];
}

export default function RoomsList() {
  return (
    <>
      <RoomsTable roomsData={roomsData} />
    </>
  );
}
