import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from './BookingTable';
import { Table } from '@mui/material';


export default function UsersTable(props) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="users table" >
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Photo</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>ID</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Name</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Email</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Job Desk Description</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Start Date</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Contact</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(props.usersData) && props.usersData.length > 0 ? (
            props.usersData.map((users) => (
              <TableRow key={users.id}>
                <StyledTableCell>{users.photo}</StyledTableCell>
                <StyledTableCell>{users.id}</StyledTableCell>
                <StyledTableCell>{users.name}</StyledTableCell>
                <StyledTableCell>{users.mail}</StyledTableCell>
                <StyledTableCell>{users.job}</StyledTableCell>
                <StyledTableCell>{users.startDate}</StyledTableCell>
                <StyledTableCell>{users.phone}</StyledTableCell>
                <StyledTableCell>{users.status}</StyledTableCell>
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
