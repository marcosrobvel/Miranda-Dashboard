import { createAsyncThunk } from '@reduxjs/toolkit';

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

export interface BookingData {
  id?: string | number;
  guest: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  roomNumber?: number;
  specialRequest: string;
  status?: string;
  orderDate?: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export const fetchBookings = createAsyncThunk<FormattedBooking[], void, { rejectValue: string }>(
  'bookings/fetchBookings',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_URL}bookings`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
        },
       // mode: 'no-cors',
        credentials: 'include',
      });

      if (!response.ok) {
        if (response.status === 404) {
          return rejectWithValue('Endpoint not found (404)');
        }
        if (response.status === 502) {
          return rejectWithValue('Bad gateway (502) - Server error');
        }
        const errorData = await response.json().catch(() => ({}));
        return rejectWithValue(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data: FormattedBooking[] = await response.json();
      return data;
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        return rejectWithValue('Network error/CORS issue - Failed to connect to server');
      }
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  }
);

export const createBooking = createAsyncThunk<
  FormattedBooking,
  FormattedBooking,
  { rejectValue: string }
>(
  'bookings/createBooking',
  async (newBooking, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(newBooking),
      });

      if (!response.ok) {
        throw new Error('Error al crear reserva');
      }

      const data: FormattedBooking = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to create booking');
    }
  }
);

export const deleteBooking = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>(
  'bookings/deleteBooking',
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error al eliminar reserva');
      }

      return bookingId;
    } catch (error) {
      return rejectWithValue('Failed to delete booking');
    }
  }
);

export const updateBooking = createAsyncThunk<
  FormattedBooking,
  FormattedBooking,
  { rejectValue: string }
>(
  'bookings/updateBooking',
  async (updatedBooking, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}bookings/${updatedBooking.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(updatedBooking),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar reserva');
      }

      const data: FormattedBooking = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to update booking');
    }
  }
);
