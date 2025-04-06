import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createBooking, deleteBooking, updateBooking } from './bookingsThunks'; 
import bookingData from '../data/booking.json';

const getNextId = (bookings) => {
  if (!bookings || !Array.isArray(bookings) || bookings.length === 0) {
    return 1; 
  }
  const maxId = Math.max(...bookings.map(b => {
    const idNum = typeof b.id === 'number' ? b.id : parseInt(b.id.toString().replace(/\D/g, ''));
    return isNaN(idNum) ? 0 : idNum;
  }));
  
  return maxId + 1; 
};

const getCurrentDateFormatted = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}-${month}-${year}`;
};

export const fetchBookings = createAsyncThunk(
  'booking/fetchBookings',
  async (_, { rejectWithValue }) => {
    try {
      return bookingData;
    } catch (error) {
      return rejectWithValue('Failed to fetch bookings');
    }
  }
);

const initialState = {
  bookings: [],
  status: 'idle',
  error: null
};

const bookingsSlice = createSlice({
  name: 'booking',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.bookings = [...action.payload];
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })


      .addCase(createBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const newBooking = {
          ...action.payload,
          id: getNextId(state.bookings),
          orderDate: getCurrentDateFormatted(),
          bookStatus: action.payload.status || 'in',
          roomNumber: getNextId(state.bookings)
        };
        state.bookings = [...state.bookings, newBooking];
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      



      .addCase(deleteBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.bookings = state.bookings.filter(bookings => bookings.id !== action.payload);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })



      .addCase(updateBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        
        const originalBooking = state.bookings.find(b => b.id === action.payload.id);
        
        const updatedBooking = {
          ...action.payload,
          bookStatus: action.payload.status || 'in',
          roomNumber: originalBooking?.roomNumber || getNextId(state.bookings),
          orderDate: originalBooking ? getCurrentDateFormatted(new Date(originalBooking.orderDate)) : getCurrentDateFormatted(),
          special: action.payload.special || action.payload.special_request || originalBooking?.special || originalBooking?.special_request || '-'
        };
        
        state.bookings = state.bookings.map(booking => 
          booking.id === action.payload.id ? updatedBooking : booking
        );
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default bookingsSlice.reducer;
