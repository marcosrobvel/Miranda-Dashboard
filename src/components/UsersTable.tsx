import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableCellHead } from './styled-components/BookingTable';
import { Table } from '@mui/material';

// Define the User type
interface User {
  id: number;
  photo: string;
  name: string;
  mail: string;
  job: string;
  startDate: string;
  phone: string;
  status: string;
}

// Define the props for the UsersTable component
interface UsersTableProps {
  usersData: User[]; // usersData is an array of User objects
}

const UsersTable: React.FC<UsersTableProps> = ({ usersData }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
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
          {Array.isArray(usersData) && usersData.length > 0 ? (
            usersData.map((user) => (
              <TableRow key={user.id}>
                <StyledTableCell>{user.photo}</StyledTableCell>
                <StyledTableCell>{user.id}</StyledTableCell>
                <StyledTableCell>{user.name}</StyledTableCell>
                <StyledTableCell>{user.mail}</StyledTableCell>
                <StyledTableCell>{user.job}</StyledTableCell>
                <StyledTableCell>{user.startDate}</StyledTableCell>
                <StyledTableCell>{user.phone}</StyledTableCell>
                <StyledTableCell>{user.status}</StyledTableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <StyledTableCell colSpan={8} align="center">
                No hay usuarios disponibles.
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
