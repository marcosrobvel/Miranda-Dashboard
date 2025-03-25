import * as React from "react";
import bookingsData from "../data/booking.js";
import BookingTabs from "../components/BookingTabs.jsx";

export default function BookingList() {
  return (
    <>
      <BookingTabs bookingsData={bookingsData}/>
    </>
  );
}
