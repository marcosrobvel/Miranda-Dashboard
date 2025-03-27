import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from './BookingTable';
import { Table } from '@mui/material';


export default function ContactTable(props) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="contact table" >
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Date</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Customer</StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 'bold' }}>Comment</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(props.contactData) && props.contactData.length > 0 ? (
            props.contactData.map((contact) => (
              <TableRow key={contact.id}>
                <StyledTableCell>
                    {contact.date}
                    <p>#{contact.id}</p>
                </StyledTableCell>
                <StyledTableCell>{contact.customer} 
                     <p>{contact.mail}</p> 
                     <p>{contact.phone}</p>
                     </StyledTableCell>
                <StyledTableCell>{contact.subject} 
                    <p>{contact.comment}</p>
                    </StyledTableCell>
                    <StyledTableCell>Archive</StyledTableCell>
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
