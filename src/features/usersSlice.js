import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  user: null,
  status: 'idle',
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    resetUser: (state) => {
      state.user = null;
    }
  }
});

export const { 
  setUsers, 
  setUser, 
  addUser, 
  updateUser, 
  deleteUser,
  resetUser
} = usersSlice.actions;

export default usersSlice.reducer;