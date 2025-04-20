import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookingTabs from '../components/BookingTabs';
import { fetchBookings } from '../features/bookingsThunks'; 
import { RootState, AppDispatch } from '../app/store';

// Interface que coincide con lo que espera BookingTabs
interface Booking {
  id: number;
  guest: string;
  bookStatus: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  specialRequest: string;
  orderDate: string;
}

export default function BookingList() {
  const dispatch = useDispatch<AppDispatch>();
  const { bookings, status, error } = useSelector((state: RootState) => state.booking);

  useEffect(() => {
    if (bookings.length === 0) {
      dispatch(fetchBookings());
    }
  }, [dispatch, bookings.length]);

  // Transformar los datos para que coincidan con el tipo Booking
  const formattedBookings: Booking[] = bookings.map((booking: any) => ({
    id: Number(booking.id),
    guest: booking.guest || 'Unknown Guest',
    bookStatus: booking.bookStatus || booking.status || 'in',
    checkIn: booking.checkIn || booking.check_in || '',
    checkOut: booking.checkOut || booking.check_out || '',
    roomType: booking.roomType || booking.room_type || '',
    specialRequest: booking.specialRequest || booking.special_request || '',
    orderDate: booking.orderDate || '',
  }));

  return (
    <div className="booking-list-container">
      {status === 'loading' && <div className="loading-message">Loading bookings...</div>}
      {status === 'failed' && <div className="error-message">Error: {error?.toString() || 'Unknown error'}</div>}
      
      <BookingTabs bookings={formattedBookings} />
    </div>
  );
}
