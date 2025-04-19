import { createSlice } from '@reduxjs/toolkit';
import { createBooking, deleteBooking, updateBooking, FormattedBooking } from './bookingsThunks';

interface BookingsState {
  bookings: FormattedBooking[];
  status: 'idle' | 'loading' | 'failed' | 'fulfilled';
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
    builder
      .addCase(createBooking.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to create booking';
      })
      
      .addCase(deleteBooking.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to delete booking';
      })
      
      .addCase(updateBooking.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const index = state.bookings.findIndex(booking => booking.id === action.payload.id);
        if (index !== -1) {
          state.bookings[index] = action.payload;
        }
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to update booking';
      });
  },
});

export default bookingsSlice.reducer;