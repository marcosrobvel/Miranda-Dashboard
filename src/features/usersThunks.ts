// usersThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface User {
  id: number;
  photo: string;
  name: string;
  mail: string;
  job: string;
  phone: string;
  status: 'active' | 'inactive';
  startDate: string;
  endDate: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue('Failed to fetch users');
    }
  }
);

export const createUser = createAsyncThunk<User, User, { rejectValue: string }>(
  'users/createUser',
  async (user, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(user),
      });
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue('Failed to create user');
    }
  }
);

export const deleteUser = createAsyncThunk<number, number, { rejectValue: string }>(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      if (!res.ok) throw new Error();
      return id;
    } catch {
      return rejectWithValue('Failed to delete user');
    }
  }
);

export const updateUser = createAsyncThunk<User, User, { rejectValue: string }>(
  'users/updateUser',
  async (user, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(user),
      });
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue('Failed to update user');
    }
  }
);
