import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from './BookingTable';
import { Table } from '@mui/material';


export default function BookingTable(props) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="booking table" >
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Guest</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Order Date</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Check In</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Check Out</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Special Request</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Room Type</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(props.bookingsData) && props.bookingsData.length > 0 ? (
            props.bookingsData.map((booking) => (
              <TableRow key={booking.id}>
                <StyledTableCell>
                  {booking.guest}
                  <p>#{booking.id}</p>
                </StyledTableCell>
                <StyledTableCell>{booking.orderDate}</StyledTableCell>
                <StyledTableCell>{booking.checkIn}</StyledTableCell>
                <StyledTableCell>{booking.checkOut}</StyledTableCell>
                <StyledTableCell>{booking.special}</StyledTableCell>
                <StyledTableCell>{booking.roomType} - {booking.roomNumber}</StyledTableCell>
                <StyledTableCell>{booking.bookStatus}</StyledTableCell>
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
