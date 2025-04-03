import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBooking } from './bookingsSlice';

export const createBooking = createAsyncThunk(
  'bookings/createBooking',
  async (bookingData, { dispatch }) => {
    try {
      const formattedBooking = {
        guest: bookingData.guest,
        check_in: bookingData.check_in,
        check_out: bookingData.check_out,
        room_type: bookingData.room_type,
        special_request: bookingData.special_request,
        status: bookingData.status,
        roomNumber: '', 
        orderDate: new Date().toISOString()
      };
      
      dispatch(addBooking(formattedBooking));
      return formattedBooking;
    } catch (error) {
      throw new Error('Failed to create booking');
    }
  }
);