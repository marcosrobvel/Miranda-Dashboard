import { createAsyncThunk } from '@reduxjs/toolkit';

interface BookingData {
  id?: string | number;
  guest: string;
  check_in: string;
  check_out: string;
  room_type: string;
  special_request: string;
  status?: string;
  orderDate?: string;
}

export interface FormattedBooking {
  id: string | number;
  guest: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  specialRequest: string;
  status: string;
  orderDate: string;
  roomNumber?: number;
  bookStatus?: string;
}

export const fetchBookings = createAsyncThunk<
  FormattedBooking[], 
  void,             
  { rejectValue: string }
>(
  'bookings/fetchBookings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await new Promise<FormattedBooking[]>((resolve) =>
        setTimeout(() => {
          resolve([
            {
              id: 1,
              guest: 'John Doe',
              checkIn: '2025-05-01',
              checkOut: '2025-05-05',
              roomType: 'Deluxe',
              specialRequest: 'Late check-in',
              status: 'confirmed',
              orderDate: '2025-04-20',
            },
          ]);
        }, 500)
      );

      return response;
    } catch (error) {
      return rejectWithValue('Failed to fetch bookings');
    }
  }
);

export const createBooking = createAsyncThunk<
  FormattedBooking,
  BookingData,
  { rejectValue: string }
>(
  'bookings/createBooking',
  async (bookingsData, { rejectWithValue }) => {
    try {
      const formattedBooking: FormattedBooking = {
        id: Date.now(), // Generamos un ID temporal
        guest: bookingsData.guest,
        checkIn: bookingsData.check_in,
        checkOut: bookingsData.check_out,
        roomType: bookingsData.room_type,
        specialRequest: bookingsData.special_request,
        status: bookingsData.status || 'in',
        orderDate: bookingsData.orderDate || new Date().toISOString()
      };

      return formattedBooking;
    } catch (error) {
      return rejectWithValue('Failed to create booking');
    }
  }
);

export const deleteBooking = createAsyncThunk<
  string | number,
  string | number,
  { rejectValue: string }
>(
  'bookings/deleteBooking',
  async (bookingId, { rejectWithValue }) => {
    try {
      return bookingId;
    } catch (error) {
      return rejectWithValue('Failed to delete booking');
    }
  }
);

export const updateBooking = createAsyncThunk<
  FormattedBooking,
  BookingData & { id: string | number },
  { rejectValue: string }
>(
  'bookings/updateBooking',
  async (bookingData, { rejectWithValue }) => {
    try {
      const formattedBooking: FormattedBooking = {
        id: bookingData.id,
        guest: bookingData.guest,
        checkIn: bookingData.check_in,
        checkOut: bookingData.check_out,
        roomType: bookingData.room_type,
        specialRequest: bookingData.special_request,
        status: bookingData.status || 'in',
        orderDate: bookingData.orderDate || new Date().toISOString()
      };

      return formattedBooking;
    } catch (error) {
      return rejectWithValue('Failed to update booking');
    }
  }
);