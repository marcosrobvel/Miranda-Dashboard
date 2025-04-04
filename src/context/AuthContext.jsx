import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_USER: 'UPDATE_USER',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isAuthenticated: true, user: action.payload };
    case actionTypes.LOGOUT:
      return { ...state, isAuthenticated: false, user: null };
    case actionTypes.UPDATE_USER:
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      const user = { username };
      dispatch({ type: actionTypes.LOGIN, payload: user });
      localStorage.setItem('logged', true);
      return true;
    }
    return false;
  };

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
    localStorage.removeItem('logged');
  };

  const updateUser = (userData) => {
    dispatch({ type: actionTypes.UPDATE_USER, payload: userData });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
