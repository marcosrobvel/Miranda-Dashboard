import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/bookingsSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer
  },
  devTools: true
});