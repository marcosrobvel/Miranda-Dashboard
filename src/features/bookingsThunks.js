import { createAsyncThunk } from '@reduxjs/toolkit';

export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async (bookingsData, { rejectWithValue }) => {
    try {
      const formattedBooking = {
        guest: bookingsData.guest,
        checkIn: bookingsData.check_in,
        checkOut: bookingsData.check_out,
        roomType: bookingsData.room_type,
        special: bookingsData.special_request,
        status: bookingsData.status || 'in',
        orderDate: new Date().toISOString()
      };

      return formattedBooking;
    } catch (error) {
      return rejectWithValue('Failed to create booking');
    }
  }
);

export const deleteBooking = createAsyncThunk(
  'booking/deleteBooking',
  async (bookingId, { rejectWithValue }) => {
    try {
      return bookingId;
    } catch (error) {
      return rejectWithValue('Failed to delete booking');
    }
  }
);
