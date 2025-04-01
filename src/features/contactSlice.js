import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  contact: null,
  status: 'idle',
  error: null
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setContact: (state, action) => {
      state.contact = action.payload;
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    resetContact: (state) => {
      state.contact = null;
    }
  }
});

export const { 
  setContacts, 
  setContact, 
  addContact, 
  updateContact, 
  deleteContact,
  resetContact
} = contactsSlice.actions;

export default contactsSlice.reducer;