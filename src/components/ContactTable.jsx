import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableCellHead } from './styled-components/BookingTable';
import { Table } from '@mui/material';


export default function ContactTable(props) {

  

    const handleChangeColorBtn = (e) => {
        e.target.style.backgroundColor = 'red';
        e.target.style.color = 'white';
    }

    console.log(props.contactData);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="contact table" >
        <TableHead>
          <TableRow>
            <StyledTableCellHead>Date</StyledTableCellHead>
            <StyledTableCellHead>Customer</StyledTableCellHead>
            <StyledTableCellHead>Comment</StyledTableCellHead>
            <StyledTableCellHead>Archive</StyledTableCellHead>
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
                    <StyledTableCell>
                            <button 
                                className='contact-archive-button' 
                                onClick={(e) => {
                                    contact.status = "archived";
                                    handleChangeColorBtn(e);
                                 }}
                            >
                                Archive
                            </button>
                    </StyledTableCell>
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
