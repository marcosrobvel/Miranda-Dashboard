import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from './BookingTable';
import { Table } from '@mui/material';


export default function RoomsTable(props) {
  return (
        <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="rooms table" >
            <TableHead>
            <TableRow>
                <StyledTableCell sx={{ fontWeight: 'bold' }}>ID</StyledTableCell>
                <StyledTableCell sx={{ fontWeight: 'bold' }}>Photo</StyledTableCell>
                <StyledTableCell sx={{ fontWeight: 'bold' }}>Room Number</StyledTableCell>
                <StyledTableCell sx={{ fontWeight: 'bold' }}>Room Type</StyledTableCell>
                <StyledTableCell sx={{ fontWeight: 'bold' }}>Amenities</StyledTableCell>
                <StyledTableCell sx={{ fontWeight: 'bold' }}>Price</StyledTableCell>
                <StyledTableCell sx={{ fontWeight: 'bold' }}>Offer Price</StyledTableCell>
                <StyledTableCell sx={{ fontWeight: 'bold' }}>Status</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {Array.isArray(props.roomsData) && props.roomsData.length > 0 ? (
                props.roomsData.map((rooms) => (
                <TableRow key={rooms.id}>
                    <StyledTableCell>{rooms.id}</StyledTableCell>
                    <StyledTableCell>{rooms.photo}</StyledTableCell>
                    <StyledTableCell>{rooms.roomNumber}</StyledTableCell>
                    <StyledTableCell>{rooms.roomType}</StyledTableCell>
                    <StyledTableCell>{rooms.amenities}</StyledTableCell>
                    <StyledTableCell>{rooms.price}</StyledTableCell>
                    <StyledTableCell>{rooms.offer_price}</StyledTableCell>
                    <StyledTableCell>{rooms.status}</StyledTableCell>
                </TableRow>
                ))
            ) : (
                <TableRow>
                <StyledTableCell colSpan={8} align="center">
                    No hay reservas disponibles.
                </StyledTableCell>
                </TableRow>
            )}
            </TableBody>
        </Table>
        </TableContainer>
  )
}
