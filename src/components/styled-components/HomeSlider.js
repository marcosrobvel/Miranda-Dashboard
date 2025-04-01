import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
    gap: 40px;
    height: auto;
    width: 100%;
`;


export const StyledCardInfo = styled.div`
    width: 50%;
    display: flex;            
    flex-direction: column;     
    gap: 0; 

    & p {
        margin-top: 0;
    }
`;

export const StyledButton = styled.button`
    background-color: #135846;
    color: white;
    border-radius: 12px;
    font-size: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 40px;
    margin: 0;
`;

export const StyledSlider = styled.div`
  display: flex;              
  justify-content: center;  
  align-items: center;                
  width: 100%;                        
  height: auto;      
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #ffffff;
  padding-top: 60px;
  border-radius: 12px;
`;

export const StyledCard = styled.div`
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 20px;
    border: solid 1px #EBEBEB;
`;

export const StyledParaph = styled.p`
    position: absolute;
    top: 260px;
    left: 0;
    margin-left: 100px;
    font-weight: 500;
`;