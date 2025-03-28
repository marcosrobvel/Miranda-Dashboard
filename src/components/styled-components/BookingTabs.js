import React from "react";
import styled from "styled-components";

export const StyledContainer = styled.div`
    margin-left: 20px;
    
    font-family: 'Poppins';
`;

export const StyledDiv = styled.div`
 
    
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 20px;
    cursor: pointer;
   
`;

export const StyledTab = styled.div`
      color: #6E6E6E;
      &.active {
        color: #135846;
        border-bottom: 2px solid #135846;
        font-weight: 400;
      }
  
`;