import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookingTabs from '../components/BookingTabs';
import { fetchBookings } from '../features/bookingsSlice';
import { RootState, AppDispatch } from '../app/store';

interface Booking {
  id: string | number;
  guest: string;
  status?: string;
  bookStatus?: string;
  check_in?: string;
  checkOut?: string;
  room_type?: string;
  roomType?: string;
  special_request?: string;
  special?: string;
  specialRequest?: string;
  orderDate?: string;
}

interface FormattedBooking {
  id: string | number;
  guest: string;
  bookStatus: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  specialRequest: string;
  orderDate?: string;
}

export default function BookingList() {
  const dispatch = useDispatch<AppDispatch>();
  const { bookings, status, error } = useSelector((state: RootState) => state.bookings);

  useEffect(() => {
    if (bookings.length === 0) {
      // Opción 1: Si fetchBookings no necesita parámetros, modifica el thunk
      dispatch(fetchBookings({})); // Objeto vacío si espera un parámetro
      
      // Opción 2: Si necesita parámetros específicos:
      // dispatch(fetchBookings({ page: 1, limit: 10 }));
    }
  }, [dispatch, bookings.length]);

  const formattedBookings: FormattedBooking[] = bookings.map((booking: Booking) => ({
    id: booking.id,
    guest: booking.guest,
    bookStatus: booking.status || booking.bookStatus || 'in',
    checkIn: booking.check_in || booking.checkOut || '',
    checkOut: booking.checkOut || booking.check_in || '',
    roomType: booking.room_type || booking.roomType || '',
    specialRequest: booking.special_request || booking.special || booking.specialRequest || '',
    orderDate: booking.orderDate
  }));

  return (
    <div className="booking-list-container">
      {status === 'loading' && <div className="loading-message">Loading bookings...</div>}
      {status === 'failed' && <div className="error-message">Error: {error?.toString() || 'Unknown error'}</div>}
      
      <BookingTabs bookingsData={formattedBookings} />
    </div>
  );
}