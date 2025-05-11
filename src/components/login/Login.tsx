import React, { useState, FormEvent } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledForm, StyledLogin } from "../styled-components/Login";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

/**
 * probar en local, si funciona, hacer build de front, vovler a cargar los archivos en aws y probar
 * 
 */

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      login(data.user, data.token);
      navigate("/");

    } catch (err) {
      setError("Incorrect credentials, try again:");
    }
  };

  return (
    <StyledLogin>
      <h2>LogIn</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <input
            data-testid="username-input"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            data-testid="password-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" data-testid="loginBtn">
          Submit
        </button>
      </StyledForm>
    </StyledLogin>
  );
};

export default Login;
