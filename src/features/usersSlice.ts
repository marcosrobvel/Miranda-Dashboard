// usersSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUsers,
  createUser,
  deleteUser,
  updateUser,
  User
} from './usersThunks';

interface UsersState {
  users: User[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to fetch users';
      })

      .addCase(createUser.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to create user';
      })

      .addCase(deleteUser.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.users = state.users.filter((u) => u.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to delete user';
      })

      .addCase(updateUser.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const index = state.users.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to update user';
      });
  },
});

export default usersSlice.reducer;
