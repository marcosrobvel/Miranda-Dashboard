import { combineReducers } from 'redux';
import bookingsReducer from '../features/bookingsSlice';
import roomsReducer from '../features/roomsSlice'
import contactsReducer from '../features/contactSlice'
import usersReducer from '../features/usersSlice'
import { configureStore } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('hotelAppState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('hotelAppState', serializedState);
  } catch {
    
  }
};

const rootReducer = combineReducers({
  bookings: bookingsReducer,
  rooms: roomsReducer,
  users: usersReducer,
  contacts: contactsReducer
});

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  devTools: true
});

store.subscribe(() => {
  saveState(store.getState());
});