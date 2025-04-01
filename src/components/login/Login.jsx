import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { StyledForm, StyledLogin } from '../styled-components/Login';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/');
    } else {
      setError('Incorrect credentials, try again:');
    }
  };

  return (
    <StyledLogin>
      <h2>LogIn</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <input
            placeholder='Username'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </StyledForm>
    </StyledLogin>
  );
};

export default Login;
