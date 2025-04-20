import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store'; // Adjust the path to your store file
import { useNavigate, useLocation } from 'react-router-dom';
import { updateBooking } from '../features/bookingsThunks';
import { DivContainer, StyledButton, StyledDiv, StyledDivNameChecks, StyledDivRoomtypeRequest } from '../components/styled-components/NewBooking';

interface Booking {
  id: string;
  guest: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  specialRequest: string;
  status: string;
}

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  
  const { booking } = location.state as { booking: Booking } || {};
  
  const [formData, setFormData] = useState<Booking>({
    id: '',
    guest: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    specialRequest: '',
    status: 'in'
  });

  useEffect(() => {
    if (booking) {
      setFormData({
        id: booking.id,
        guest: booking.guest,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        roomType: booking.roomType,
        specialRequest: booking.specialRequest || '',
        status: booking.status || 'in'
      });
    }
  }, [booking]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    if (dateString.includes('-')) {
      const [month, day, year] = dateString.split('-');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    return dateString;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.guest || !formData.checkIn || !formData.checkOut || !formData.roomType) {
      alert('Please complete all required fields');
      return;
    }
  
    const updatedBooking = {
      id: formData.id,
      guest: formData.guest,
      check_in: formatDate(formData.checkIn),
      check_out: formatDate(formData.checkOut),
      room_type: formData.roomType,
      special_request: formData.specialRequest,
      status: formData.status.toLowerCase()
    };
  
    dispatch(updateBooking(updatedBooking));
    navigate('/bookings');
  };

  return (
    <DivContainer>
      <form onSubmit={handleSubmit}>
        <StyledDiv>
          <StyledDivNameChecks>
            <label htmlFor="guest">Name and last name</label>
            <input 
              type="text" 
              id="guest"
              name="guest"
              value={formData.guest}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="checkIn">Check In</label>
            <input 
              type="date" 
              id="checkIn"
              name="checkIn"
              value={formatDate(formData.checkIn)}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="checkOut">Check Out</label>
            <input 
              type="date" 
              id="checkOut"
              name="checkOut"
              value={formatDate(formData.checkOut)}
              onChange={handleChange}
              required
            />
          </StyledDivNameChecks>
          
          <StyledDivRoomtypeRequest>
            <label htmlFor="roomType">Room Type</label>
            <select 
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              required
            >
              <option value="">Select a room type</option>
              <option value="Double Bed">Double Bed</option>
              <option value="Single Bed">Single Bed</option>
              <option value="Suite">Suite</option>
            </select>
            
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="in">Check In</option>
              <option value="out">Check Out</option>
              <option value="progress">In Progress</option>
            </select>
            
            <label htmlFor="specialRequest">Special Request</label>
            <textarea 
              id="specialRequest"
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
            />
          </StyledDivRoomtypeRequest>
        </StyledDiv>
        <StyledButton type="submit">Update Booking</StyledButton>
      </form>
    </DivContainer>
  );
};

export default updateBooking;
