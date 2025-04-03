import { useSelector } from 'react-redux';
import BookingTabs from '../components/BookingTabs';

export default function BookingList() {
  const { bookings } = useSelector((state) => state.bookings);

  const formattedBookings = bookings.map(booking => ({
    ...booking,
    bookStatus: booking.status || booking.bookStatus || 'in',
    checkIn: booking.check_in || booking.checkIn,
    checkOut: booking.check_out || booking.checkOut,
    roomType: booking.room_type || booking.roomType,
    special: booking.special || booking.specialRequest
  }));

  return (
    <div className="booking-list-container">
      <BookingTabs bookingsData={formattedBookings} />
    </div>
  );
}