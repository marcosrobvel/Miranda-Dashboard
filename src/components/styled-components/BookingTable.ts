import styled from "styled-components";
import { TableCell, TableCellProps } from "@mui/material";

export const StyledTableCell = styled(TableCell)<TableCellProps>`
    &.MuiTableCell-root, &.MuiTableCell-body {
        font-family: 'Poppins';   
    }
`;

export const StyledTableCellHead = styled(TableCell)<TableCellProps>`
    &.MuiTableCell-root, &.MuiTableCell-body {
        font-family: 'Poppins';   
        font-weight: bold;
    }
`;

export const StyledDiv = styled.div`
    font-size: 16px;

    & .pencil-icon, .trash-icon {
        margin-left: 10px;
    }

    & .pencil-icon:hover, .trash-icon:hover {
        cursor: pointer;
    }
`;

