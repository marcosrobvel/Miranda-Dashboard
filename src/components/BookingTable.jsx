import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Table } from '@mui/material';
import { StyledDiv, StyledTableCell, StyledTableCellHead } from './styled-components/BookingTable';
import { FaPencil } from 'react-icons/fa6';
import { GoTrash } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { deleteBooking } from '../features/bookingsSlice';

export default function BookingTable({ bookingsData }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      dispatch(deleteBooking(id));
    }
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="booking table">
        <TableHead>
          <TableRow>
            <StyledTableCellHead>Guest</StyledTableCellHead>
            <StyledTableCellHead>Order Date</StyledTableCellHead>
            <StyledTableCellHead>Check In</StyledTableCellHead>
            <StyledTableCellHead>Check Out</StyledTableCellHead>
            <StyledTableCellHead>Special Request</StyledTableCellHead>
            <StyledTableCellHead>Room Type</StyledTableCellHead>
            <StyledTableCellHead>Status</StyledTableCellHead>
            <StyledTableCellHead>Actions</StyledTableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingsData.length > 0 ? (
            bookingsData.map((booking) => (
              <TableRow key={booking.id}>
                <StyledTableCell>
                  {booking.guest}
                  <p>#{booking.id}</p>
                </StyledTableCell>
                <StyledTableCell>{booking.orderDate}</StyledTableCell>
                <StyledTableCell>{booking.checkIn || booking.check_in}</StyledTableCell>
                <StyledTableCell>{booking.checkOut || booking.check_out}</StyledTableCell>
                <StyledTableCell>{booking.special || booking.special_request || '-'}</StyledTableCell>
                <StyledTableCell>{booking.roomType} {booking.roomNumber ? `- ${booking.roomNumber}` : ''}</StyledTableCell>
                <StyledTableCell>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: 
                      booking.bookStatus === 'in' ? '#e6f7ee' :
                      booking.bookStatus === 'out' ? '#fff1f0' : '#fff7e6',
                    color:
                      booking.bookStatus === 'in' ? '#087f5b' :
                      booking.bookStatus === 'out' ? '#c92a2a' : '#e67700'
                  }}>
                    {booking.bookStatus}
                  </span>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledDiv>
                    <FaPencil className='pencil-icon' />
                    <GoTrash 
                      className='trash-icon' 
                      onClick={() => handleDelete(booking.id)}
                      style={{ color: '#ff6b6b', cursor: 'pointer', marginLeft: '20px' }}
                    />
                  </StyledDiv>
                </StyledTableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <StyledTableCell colSpan={8} align="center">
                No bookings available
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

