import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    border: solid 2px #EBEBEB;
    padding: 20px;
    margin: 0 auto;
    gap: 20px;
    border-radius: 15px;
    
    & input, select {
        margin-bottom: 20px;
        height: 30px;
        width: 700px;
    }

    & textarea {
        resize: none;
        height: 45%;
    }

    & select{
        width: 500px;
        height: 35px;
    }
`;

export const StyledDivRoomtypeRequest = styled.div`
    display: flex;
    flex-direction: column;

`;

export const StyledDivNameChecks = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledButton = styled.button`
    
    cursor: pointer;
    font-size: 20px;
    font-family: 'Poppins';
    background-color: #135846;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-self: center;
    margin-top: 20px;

    &:hover {
      transform: scale(1.15);
      transition: transform 0.3s ease, background-color 0.3s ease;
    }
`;

export const DivContainer = styled.div`
    margin-top: 50px;
`;