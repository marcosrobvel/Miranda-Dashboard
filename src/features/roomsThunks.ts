import { createAsyncThunk } from '@reduxjs/toolkit';

export interface Room {
  id: number;
  photo: string[];
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  offer_price: number;
  status: 'available' | 'booked';
}

const API_URL = import.meta.env.VITE_API_URL;

export const fetchRooms = createAsyncThunk<Room[], void, { rejectValue: string }>(
  'rooms/fetchRooms',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/rooms`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      if (!res.ok) throw new Error('Error fetching rooms');
      return await res.json();
    } catch {
      return rejectWithValue('Failed to fetch rooms');
    }
  }
);

export const createRoom = createAsyncThunk<Room, Room, { rejectValue: string }>(
  'rooms/createRoom',
  async (room, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/rooms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(room),
      });
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue('Failed to create room');
    }
  }
);

export const deleteRoom = createAsyncThunk<number, number, { rejectValue: string }>(
  'rooms/deleteRoom',
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/rooms/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      if (!res.ok) throw new Error();
      return id;
    } catch {
      return rejectWithValue('Failed to delete room');
    }
  }
);

export const updateRoom = createAsyncThunk<Room, Room, { rejectValue: string }>(
  'rooms/updateRoom',
  async (room, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/rooms/${room.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(room),
      });
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue('Failed to update room');
    }
  }
);