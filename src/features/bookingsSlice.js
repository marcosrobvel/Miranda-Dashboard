import { createSlice } from '@reduxjs/toolkit';

const getNextId = (bookings) => {
  if (bookings.length === 0) return 1;
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

const loadBookings = () => {
  try {
    const saved = localStorage.getItem('bookings');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error loading bookings:", error);
    return [];
  }
};

const initialState = {
  bookings: loadBookings(),
  status: 'idle'
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const nextId = getNextId(state.bookings);
      const newBooking = {
        ...action.payload,
        id: nextId,
        orderDate: getCurrentDateFormatted(),
        bookStatus: action.payload.status || 'in' 
      };
      
      state.bookings.push(newBooking);
      localStorage.setItem('bookings', JSON.stringify(state.bookings));
      alert("Book created correctly, to find your book go to the end of the bookings.");

      setTimeout(() => {
        const lastBookingElement = document.querySelector('.booking-item:last-child');
        
        if (lastBookingElement) {
          lastBookingElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    },
    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        booking => booking.id !== action.payload
      );
      localStorage.setItem('bookings', JSON.stringify(state.bookings));
    }
  }
});

export const { addBooking, deleteBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;