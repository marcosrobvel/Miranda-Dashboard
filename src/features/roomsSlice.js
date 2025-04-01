import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [],
  room: null,
  status: 'idle',
  error: null
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
    addRoom: (state, action) => {
      state.rooms.push(action.payload);
    },
    updateRoom: (state, action) => {
      const index = state.rooms.findIndex(room => room.id === action.payload.id);
      if (index !== -1) {
        state.rooms[index] = action.payload;
      }
    },
    deleteRoom: (state, action) => {
      state.rooms = state.rooms.filter(room => room.id !== action.payload);
    },
    resetRoom: (state) => {
      state.room = null;
    }
  }
});

export const { 
  setRooms, 
  setRoom, 
  addRoom, 
  updateRoom, 
  deleteRoom,
  resetRoom
} = roomsSlice.actions;

export default roomsSlice.reducer;