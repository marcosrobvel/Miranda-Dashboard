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

export const updateBooking = createAsyncThunk(
  'booking/updateBooking',
  async (bookingData, { rejectWithValue }) => {
    try {
      const formattedBooking = {
        id: bookingData.id,
        guest: bookingData.guest,
        checkIn: bookingData.check_in,
        checkOut: bookingData.check_out,
        roomType: bookingData.room_type,
        special: bookingData.special_request,
        status: bookingData.status || 'in',
        orderDate: bookingData.orderDate || new Date().toISOString()
      };

      return formattedBooking;
    } catch (error) {
      return rejectWithValue('Failed to update booking');
    }
  }
);
