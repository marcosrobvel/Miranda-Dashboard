import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableCellHead } from './styled-components/BookingTable';
import { Table } from '@mui/material';

interface Contact {
  id: number;
  date: string;
  customer: string;
  mail: string;
  phone: string;
  subject: string;
  comment: string;
  status: string;
}

interface ContactTableProps {
  contactData: Contact[];
}

const ContactTable: React.FC<ContactTableProps> = ({ contactData }) => {
  const handleChangeColorBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = 'red';
    e.currentTarget.style.color = 'white';
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', margin: 'auto', boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="contact table">
        <TableHead>
          <TableRow>
            <StyledTableCellHead>Date</StyledTableCellHead>
            <StyledTableCellHead>Customer</StyledTableCellHead>
            <StyledTableCellHead>Comment</StyledTableCellHead>
            <StyledTableCellHead>Archive</StyledTableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(contactData) && contactData.length > 0 ? (
            contactData.map((contact) => (
              <TableRow key={contact.id}>
                <StyledTableCell>
                  {contact.date}
                  <p>#{contact.id}</p>
                </StyledTableCell>
                <StyledTableCell>
                  {contact.customer}
                  <p>{contact.mail}</p>
                  <p>{contact.phone}</p>
                </StyledTableCell>
                <StyledTableCell>
                  {contact.subject}
                  <p>{contact.comment}</p>
                </StyledTableCell>
                <StyledTableCell>
                  <button
                    className="contact-archive-button"
                    onClick={(e) => {
                      contact.status = 'archived'; // ⚠️ mutar props puede ser riesgoso
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
  );
};

export default ContactTable;
