import styled from "styled-components";

export const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    border: solid 2px #EBEBEB;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 15px;
    box-shadow: 0px 16px 30px #00000014;
    padding: 20px;
`;

export const StyledForm = styled.form`
    width: fit-content;
    min-width: 320px;
    margin-bottom: 20px;

    & input{
        border: none;
        border-bottom: solid 0.5px;
        margin-bottom: 30px;
        font-size: 20px;

        &:focus {
            outline: none;
        }
    }

    & button{
        font-size: 20px;
    }
`;