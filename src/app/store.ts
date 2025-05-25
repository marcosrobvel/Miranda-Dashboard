import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../features/bookingsSlice';
import roomsReducer from '../features/roomsSlice';
import contactsReducer from '../features/contactsSlice';
import usersReducer from '../features/usersSlice';
import rooms from '../data/rooms';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    rooms: roomsReducer,
    contacts: contactsReducer,
    users: usersReducer
  },
  devTools: true as boolean,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;