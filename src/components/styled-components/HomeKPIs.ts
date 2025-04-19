import styled from 'styled-components';

export const StyledKPIsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`;

export const StyledDivBlock = styled.div`
    background-color: white;
`;

export const StyledDiv = styled.div`
    & .KPIs-container__newBooking {
        display: flex;
        align-items: center;
        font-family: 'Poppins';

        &:hover {
            cursor: pointer;
            .KPIs-container__newBooking__icon {
                background-color: #E23428;
                color: #FFFFFF;
            }
        }

        & .KPIs-container__newBooking__icon{
            font-size: 30px;
            color: #E23428;
            background-color: #FFEDEC;
            padding: 10px;
            border-radius: 10%;
        }

        & .KPIs-container__newBooking__text{
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            line-height: 0;
        }
    }
`;

export const StyledBackgroundKPIs = styled.div`
    background-color: white;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;

    &:hover {
        box-shadow: 0px 16px 30px #00000014;
    }
`;

export const StyledBackground = styled.div`
    background-color: #F8F8F8;
    padding: 50px;
`;
