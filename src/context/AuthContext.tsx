import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface User {
  username: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthAction {
  type: string;
  payload?: any;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_USER: 'UPDATE_USER',
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
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

interface AuthContextProps {
  state: AuthState;
  login: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  React.useEffect(() => {
    const logged = localStorage.getItem('logged') === 'true';
    if (logged) {
      const user = { username: 'admin' }; 
      dispatch({ type: actionTypes.LOGIN, payload: user });
    }
  }, []);

  const login = (user: User, token: string) => {
    dispatch({ type: actionTypes.LOGIN, payload: user });
    localStorage.setItem("authToken", token);
    localStorage.setItem("logged", "true");
  };

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
    localStorage.removeItem('logged');
  };

  const updateUser = (userData: Partial<User>) => {
    dispatch({ type: actionTypes.UPDATE_USER, payload: userData });
  };

  const contextValue = React.useMemo(
    () => ({ state, login, logout, updateUser }),
    [state]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
