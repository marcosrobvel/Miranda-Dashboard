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
  specialRequest: string;
  status?: string;
  orderDate?: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export const fetchBookings = createAsyncThunk<
  FormattedBooking[],
  void,
  { rejectValue: string }
>(
  'bookings/fetchBookings',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('authToken');

      const response = await fetch(`${API_URL}/api/bookings`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });

      if (!response.ok) {
        throw new Error('Error al obtener reservas');
      }

      const data: FormattedBooking[] = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch bookings');
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
      const response = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
      const response = await fetch(`${API_URL}/api/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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
      const response = await fetch(`${API_URL}/api/bookings/${updatedBooking.id}`, {
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
