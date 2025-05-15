// contactsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  createContact,
  deleteContact,
  updateContact,
  Contact
} from './contactsThunks';

interface ContactsState {
  contacts: Contact[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: ContactsState = {
  contacts: [],
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to fetch contacts';
      })

      .addCase(createContact.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to create contact';
      })

      .addCase(deleteContact.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.contacts = state.contacts.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to delete contact';
      })

      .addCase(updateContact.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const index = state.contacts.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Failed to update contact';
      });
  },
});

export default contactsSlice.reducer;
