import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createBooking } from '../features/bookingsThunks';
import { DivContainer, StyledButton, StyledDiv, StyledDivNameChecks, StyledDivRoomtypeRequest } from '../components/styled-components/NewBooking';

// Definimos los tipos para el estado del formulario
interface FormData {
  guest: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  specialRequest: string;
  status: string;
}

const NewBooking = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormData>({
    guest: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    specialRequest: '',
    status: 'in'
  });

  // Manejar el cambio en los inputs del formulario
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Formatear la fecha en formato MM-DD-YYYY
  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${month}-${day}-${year}`;
  };

  // Manejar el submit del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validar que todos los campos obligatorios estén completos
    if (!formData.guest || !formData.checkIn || !formData.checkOut || !formData.roomType) {
      alert('Please complete all required fields');
      return;
    }

    // Crear un objeto con los datos del nuevo booking
    const newBooking = {
      guest: formData.guest,
      check_in: formatDate(formData.checkIn),
      check_out: formatDate(formData.checkOut),
      room_type: formData.roomType,
      special_request: formData.specialRequest,
      status: formData.status.toLowerCase()
    };

    // Despachar la acción de crear la reserva
    dispatch(createBooking(newBooking));

    // Resetear el formulario
    setFormData({
      guest: '',
      checkIn: '',
      checkOut: '',
      roomType: '',
      specialRequest: '',
      status: 'in'
    });
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
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="checkOut">Check Out</label>
            <input 
              type="date" 
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
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
        <StyledButton type="submit">Book</StyledButton>
      </form>
    </DivContainer>
  );
};

export default NewBooking;
