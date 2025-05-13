// bookingsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBookings,
  createBooking,
  deleteBooking,
  updateBooking,
  FormattedBooking,
} from './bookingsThunks';

interface BookingsState {
  bookings: FormattedBooking[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: BookingsState = {
  bookings: [],
  status: 'idle',
  error: null,
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBookings.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.bookings = action.payload;
    });
    builder.addCase(fetchBookings.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || 'Failed to fetch bookings';
    });

    builder.addCase(createBooking.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(createBooking.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.bookings.push(action.payload);
    });
    builder.addCase(createBooking.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || 'Failed to create booking';
    });

    builder.addCase(deleteBooking.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.bookings = state.bookings.filter((b) => b.id !== action.payload);
    });
    builder.addCase(deleteBooking.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || 'Failed to delete booking';
    });

    builder.addCase(updateBooking.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(updateBooking.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      const index = state.bookings.findIndex((b) => b.id === action.payload.id);
      if (index !== -1) {
        state.bookings[index] = action.payload;
      }
    });
    builder.addCase(updateBooking.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || 'Failed to update booking';
    });
  },
});

export default bookingsSlice.reducer;
