import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Table } from '@mui/material';
import { StyledTableCell, StyledTableCellHead } from './styled-components/BookingTable';


export default function BookingTable(props) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="booking table" >
        <TableHead>
          <TableRow>
            <StyledTableCellHead>Guest</StyledTableCellHead>
            <StyledTableCellHead>Order Date</StyledTableCellHead>
            <StyledTableCellHead>Check In</StyledTableCellHead>
            <StyledTableCellHead>Check Out</StyledTableCellHead>
            <StyledTableCellHead>Special Request</StyledTableCellHead>
            <StyledTableCellHead>Room Type</StyledTableCellHead>
            <StyledTableCellHead>Status</StyledTableCellHead>
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
