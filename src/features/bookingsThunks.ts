import { createAsyncThunk } from '@reduxjs/toolkit';
import { bookings } from '../data/booking';

interface BookingData {
  id?: string | number;
  guest: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  specialRequest: string;
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

const API_URL = import.meta.env.VITE_API_URL;

export const fetchBookings = createAsyncThunk<FormattedBooking[], void, { rejectValue: string }>(
  'bookings/fetchBookings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      const data: FormattedBooking[] = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch bookings');
    }
  }
);

export const createBooking = createAsyncThunk<FormattedBooking, FormattedBooking, { rejectValue: string }>(
  'bookings/createBooking',
  async (newBooking, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(newBooking),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      const data: FormattedBooking = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to create booking');
    }
  }
);

export const deleteBooking = createAsyncThunk<string, string, { rejectValue: string }>(
  'bookings/deleteBooking',
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }

      return bookingId;
    } catch (error) {
      return rejectWithValue('Failed to delete booking');
    }
  }
);

export const updateBooking = createAsyncThunk<FormattedBooking, FormattedBooking, { rejectValue: string }>(
  'bookings/updateBooking',
  async (updatedBooking, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/bookings/${updatedBooking.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(updatedBooking),
      });

      if (!response.ok) {
        throw new Error('Failed to update booking');
      }

      const data: FormattedBooking = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to update booking');
    }
  }
);
