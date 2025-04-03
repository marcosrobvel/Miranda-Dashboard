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

export const StyledButton = styled.button`
    margin-left: auto;
    margin-right: 60px;
    cursor: pointer;
    font-size: 15px;
    font-family: 'Poppins';
    background-color: #135846;
    color: white;
    border-radius: 5px;

    &:hover {
      transform: scale(1.15);
      transition: transform 0.3s ease, background-color 0.3s ease;
    }
`;