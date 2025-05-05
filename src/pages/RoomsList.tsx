import * as React from "react";
import rooms from "../data/rooms";
import RoomsTable from "../components/RoomsTable";

interface Room {
  id: string | number;
  photo: string;
  roomNumber: string | number;
  roomType: string;
  amenities: string;
  price: string;
  offer_price: string;
  status: string;
}

export default function RoomsList() {
  const processedRooms = React.useMemo(() => {
    if (!Array.isArray(rooms)) return [];
    
    return rooms.map(room => ({
      id: room.id !== undefined ? room.id : '',
      photo: Array.isArray(room.photo) ? room.photo[0] : room.photo || '',
      roomNumber: room.roomNumber !== undefined ? room.roomNumber : '',
      roomType: room.roomType || '',
      amenities: room.amenities || '',
      price: String(room.price || ''),
      offer_price: String(room.offer_price || ''),
      status: room.status || ''
    }));
  }, []);

  return <RoomsTable roomsData={processedRooms} />;
}