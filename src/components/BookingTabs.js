import React from "react";
import { Box, Button, Tab } from "@mui/material";
import styled from "styled-components";

export const StyledBoxContainer = styled(Box)`
    margin-left: 20px;
`;

export const StyledBox = styled(Box)`
  & .MuiTabs-indicator {
    background-color: #135846;
    height: 2px;
    
  }
`;

export const StyledTab = styled(Tab)`
    &.MuiTab-root.Mui-selected {
        color:rgb(16, 129, 99);
        margin-left: 20px;
        font-family: 'Poppins';
    }

    &.MuiTab-root {
        text-transform: none;
        margin-left: 20px;
        font-family: 'Poppins';
        color: #6E6E6E;
    }
`;