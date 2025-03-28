import styled from 'styled-components';

export const StyledDiv = styled.div`
    & .KPIs-container__newBooking {
        display: flex;
        align-items: center;
        font-family: 'Poppins';

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