import { createAsyncThunk } from '@reduxjs/toolkit';

export type ContactStatus = '' | 'archived';
export type Email = `${string}@${string}.${string}`;
export type PhoneNumber = `${number}-${number}-${number}`;
export type URLString = `https://${string}`;

export interface Contact {
  id: number;
  photo: URLString;
  date: string;
  customer: string;
  mail: Email;
  phone: PhoneNumber;
  subject: "New Subject" | string;
  comment: string;
  status: ContactStatus;
}

const API_URL = import.meta.env.VITE_API_URL;

export const fetchContacts = createAsyncThunk<Contact[], void, { rejectValue: string }>(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/contacts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      if (!res.ok) throw new Error('Error fetching contacts');
      return await res.json();
    } catch (error) {
      return rejectWithValue('Failed to fetch contacts');
    }
  }
);

export const createContact = createAsyncThunk<Contact, Contact, { rejectValue: string }>(
  'contacts/createContact',
  async (contact, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(contact),
      });
      if (!res.ok) throw new Error('Error creating contact');
      return await res.json();
    } catch (error) {
      return rejectWithValue('Failed to create contact');
    }
  }
);

export const deleteContact = createAsyncThunk<number, number, { rejectValue: string }>(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      if (!res.ok) throw new Error();
      return id;
    } catch {
      return rejectWithValue('Failed to delete contact');
    }
  }
);

export const updateContact = createAsyncThunk<Contact, Contact, { rejectValue: string }>(
  'contacts/updateContact',
  async (contact, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}api/contacts/${contact.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify(contact),
      });
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      return rejectWithValue('Failed to update contact');
    }
  }
);