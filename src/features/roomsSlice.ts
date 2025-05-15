// roomsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRooms,
  createRoom,
  deleteRoom,
  updateRoom,
  Room
} from './roomsThunks';

interface RoomsState {
  rooms: Room[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: RoomsState = {
  rooms: [],
  status: 'idle',
  error: null,
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to fetch rooms';
      })

      .addCase(createRoom.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.rooms.push(action.payload);
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to create room';
      })

      .addCase(deleteRoom.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.rooms = state.rooms.filter((r) => r.id !== action.payload);
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to delete room';
      })

      .addCase(updateRoom.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const index = state.rooms.findIndex((r) => r.id === action.payload.id);
        if (index !== -1) {
          state.rooms[index] = action.payload;
        }
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to update room';
      });
  },
});

export default roomsSlice.reducer;
