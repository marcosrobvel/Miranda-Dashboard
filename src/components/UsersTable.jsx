import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableCellHead } from './styled-components/BookingTable';
import { Table } from '@mui/material';


export default function UsersTable(props) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="users table" >
        <TableHead>
          <TableRow>
            <StyledTableCellHead>Photo</StyledTableCellHead>
            <StyledTableCellHead>ID</StyledTableCellHead>
            <StyledTableCellHead>Name</StyledTableCellHead>
            <StyledTableCellHead>Email</StyledTableCellHead>
            <StyledTableCellHead>Job Desk Description</StyledTableCellHead>
            <StyledTableCellHead>Start Date</StyledTableCellHead>
            <StyledTableCellHead>Contact</StyledTableCellHead>
            <StyledTableCellHead>Status</StyledTableCellHead>
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
