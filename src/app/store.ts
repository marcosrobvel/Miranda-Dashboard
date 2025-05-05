import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/bookingsSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
  devTools: true as boolean,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;