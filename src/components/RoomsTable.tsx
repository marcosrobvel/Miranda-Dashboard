import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableCellHead } from './styled-components/BookingTable'; 
import { Table } from '@mui/material';


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

interface RoomsTableProps {
  roomsData: Room[];
}

const RoomsTable: React.FC<RoomsTableProps> = ({ roomsData }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="rooms table">
        <TableHead>
          <TableRow>
            <StyledTableCellHead>ID</StyledTableCellHead>
            <StyledTableCellHead>Photo</StyledTableCellHead>
            <StyledTableCellHead>Room Number</StyledTableCellHead>
            <StyledTableCellHead>Room Type</StyledTableCellHead>
            <StyledTableCellHead>Amenities</StyledTableCellHead>
            <StyledTableCellHead>Price</StyledTableCellHead>
            <StyledTableCellHead>Offer Price</StyledTableCellHead>
            <StyledTableCellHead>Status</StyledTableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(roomsData) && roomsData.length > 0 ? (
            roomsData.map((room) => (
              <TableRow key={room.id}>
                <StyledTableCell>{room.id}</StyledTableCell>
                <StyledTableCell>
                  <img src={room.photo} alt={`Room ${room.roomNumber}`} style={{ width: 50, height: 50 }} />
                </StyledTableCell>
                <StyledTableCell>{room.roomNumber}</StyledTableCell>
                <StyledTableCell>{room.roomType}</StyledTableCell>
                <StyledTableCell>{room.amenities}</StyledTableCell>
                <StyledTableCell>{room.price}</StyledTableCell>
                <StyledTableCell>{room.offer_price}</StyledTableCell>
                <StyledTableCell>{room.status}</StyledTableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <StyledTableCell colSpan={8} align="center">
                No hay habitaciones disponibles.
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoomsTable;
