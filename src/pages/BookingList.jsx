import { useDispatch, useSelector } from 'react-redux';
import BookingTabs from '../components/BookingTabs';
import { useEffect } from 'react';
import { fetchBookings } from '../features/bookingsSlice';

export default function BookingList() {
  const dispatch = useDispatch();
  const { bookings, status, error } = useSelector((state) => state.booking);

  useEffect(() => {
    if(bookings.length === 0) {
      dispatch(fetchBookings());
    }
  }, [dispatch]);


  const formattedBooking = (bookings || []).map(booking => ({
    ...booking,
    bookStatus: booking.status || booking.bookStatus || 'in',
    checkIn: booking.check_in || booking.checkIn,
    checkOut: booking.check_out || booking.checkOut,
    roomType: booking.room_type || booking.roomType,
    special: booking.special || booking.specialRequest
  }));

  return (
    <div className="booking-list-container">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <BookingTabs bookingsData={formattedBooking} />
    </div>
  );
}
