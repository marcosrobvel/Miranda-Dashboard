import { IoBedOutline } from "react-icons/io5";
import { StyledBackgroundKPIs, StyledDiv, StyledKPIsContainer } from "../styled-components/HomeKPIs";
import booking from "../../data/booking";
import { PiCalendarCheck } from "react-icons/pi";
import { TbLogin, TbLogin2 } from "react-icons/tb";

export default function HomeKPIs() {

    const bookingsData = JSON.parse(JSON.stringify(booking));

    const checkIn = bookingsData.filter(booking => booking.bookStatus === "in").length;
    const checkOut = bookingsData.filter(booking => booking.bookStatus === "out").length;
    const totalRooms = bookingsData.length; 
    const occupancyRate = (checkIn / totalRooms) * 100;
    
    return (
    <StyledKPIsContainer>
        <StyledBackgroundKPIs>
            <StyledDiv className="KPIs-container">
                <div className="KPIs-container__newBooking">
                    <IoBedOutline className="KPIs-container__newBooking__icon"/>
                    <div className="KPIs-container__newBooking__text">
                        <h2>{totalRooms}</h2>
                        <p>New Booking</p>
                    </div>
                </div>
            </StyledDiv>
        </StyledBackgroundKPIs>
        <StyledBackgroundKPIs>
            <StyledDiv className="KPIs-container">
                <div className="KPIs-container__newBooking">
                    <PiCalendarCheck className="KPIs-container__newBooking__icon"/>
                    <div className="KPIs-container__newBooking__text">
                        <h2>{occupancyRate}</h2>
                        <p>Scheduled Room</p>
                    </div>
                </div>
            </StyledDiv>
        </StyledBackgroundKPIs>
        <StyledBackgroundKPIs>
            <StyledDiv className="KPIs-container">
                <div className="KPIs-container__newBooking">
                    <TbLogin2 className="KPIs-container__newBooking__icon"/>
                    <div className="KPIs-container__newBooking__text">
                        <h2>{checkIn}</h2>
                        <p>Check In</p>
                    </div>
                </div>
            </StyledDiv>
        </StyledBackgroundKPIs>
        <StyledBackgroundKPIs>
            <StyledDiv className="KPIs-container">
                <div className="KPIs-container__newBooking">
                    <TbLogin className="KPIs-container__newBooking__icon"/>
                    <div className="KPIs-container__newBooking__text">
                        <h2>{checkOut}</h2>
                        <p>Check Out</p>
                    </div>
                </div>
            </StyledDiv>
        </StyledBackgroundKPIs>
    </StyledKPIsContainer >
    )
}