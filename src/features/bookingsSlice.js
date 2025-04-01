import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
  booking: null,
  status: 'idle', 
  error: null
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    setBooking: (state, action) => {
      state.booking = action.payload;
    },
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    updateBooking: (state, action) => {
      const index = state.bookings.findIndex(booking => booking.id === action.payload.id);
      if (index !== -1) {
        state.bookings[index] = action.payload;
      }
    },
    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
    },
    resetBooking: (state) => {
      state.booking = null;
    }
  }
});

export const { 
  setBookings, 
  setBooking, 
  addBooking, 
  updateBooking, 
  deleteBooking,
  resetBooking
} = bookingsSlice.actions;

export default bookingsSlice.reducer;