import styled from "styled-components";
import { TableCell } from "@mui/material";

export const StyledTableCell = styled(TableCell)`
    &.MuiTableCell-root, &.MuiTableCell-body {
        font-family: 'Poppins';   
    }
`;

export const StyledTableCellHead = styled(TableCell)`
    &.MuiTableCell-root, &.MuiTableCell-body {
        font-family: 'Poppins';   
        font-weight: bold;
    }
`;