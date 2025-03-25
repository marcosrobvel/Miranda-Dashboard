import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function BookingTable(props) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="booking table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Guest</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Order Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Check In</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Check Out</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Special Request</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Room Type</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Room Number</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(props.bookingsData) && props.bookingsData.length > 0 ? (
            props.bookingsData.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.guest}</TableCell>
                <TableCell>{booking.orderDate}</TableCell>
                <TableCell>{booking.checkIn}</TableCell>
                <TableCell>{booking.checkOut}</TableCell>
                <TableCell>{booking.special}</TableCell>
                <TableCell>{booking.roomType}</TableCell>
                <TableCell>{booking.roomNumber}</TableCell>
                <TableCell>{booking.bookStatus}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} align="center">
                No hay reservas disponibles.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
