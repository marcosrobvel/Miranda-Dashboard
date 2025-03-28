import * as React from "react";
import rawBookingData from "../data/booking.json";
import BookingTabs from "../components/BookingTabs.jsx";

export default function BookingList() {
  
  const bookingsData = rawBookingData.map(item => ({
    ...item,
  }));

  return (
    <>
      <BookingTabs bookingsData={bookingsData}/>
    </>
  );
}
