import { IoBedOutline } from "react-icons/io5";
import bookingsData from "../../pages/BookingList";
import roomsData from "../../data/rooms";
import { StyledDiv } from "../styled-components/HomeKPIs";

export default function HomeKPIs() {

    const bookedRooms = bookingsData.filter((booking) => booking.status === "in").length;
    const totalRooms = bookingsData.length; 
    const occupancyRate = (bookedRooms / totalRooms) * 100;

    return (
        <>
        <StyledDiv className="KPIs-container">
            <div className="KPIs-container__newBooking">
                <IoBedOutline className="KPIs-container__newBooking__icon"/>
                <div className="KPIs-container__newBooking__text">
                    <h2>{bookingsData.length}</h2>
                    <p>New Booking</p>
                </div>
            </div>
        </StyledDiv>
        <StyledDiv className="KPIs-container">
            <div className="KPIs-container__newBooking">
                <IoBedOutline className="KPIs-container__newBooking__icon"/>
                <div className="KPIs-container__newBooking__text">
                    <h2>{roomsData.length}</h2>
                    <p>Scheduled Room</p>
                </div>
            </div>
        </StyledDiv>
        <StyledDiv className="KPIs-container">
            <div className="KPIs-container__newBooking">
                <IoBedOutline className="KPIs-container__newBooking__icon"/>
                <div className="KPIs-container__newBooking__text">
                    <h2>{occupancyRate}</h2>
                    <p>Check In</p>
                </div>
            </div>
        </StyledDiv>
        <StyledDiv className="KPIs-container">
            <div className="KPIs-container__newBooking">
                <IoBedOutline className="KPIs-container__newBooking__icon"/>
                <div className="KPIs-container__newBooking__text">
                    <h2>{bookingsData.length}</h2>
                    <p>Check Out</p>
                </div>
            </div>
        </StyledDiv>
        </>
    )
}