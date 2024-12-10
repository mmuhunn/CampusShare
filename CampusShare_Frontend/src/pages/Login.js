import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#6b4f4f",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6b4f4f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    margin: "10px 0",
    transition: "background-color 0.3s ease",
  },
  createAccount: {
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#6b4f4f",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!password) {
      alert("Please enter your password.");
      return;
    }

    alert(`Logged in with Email: ${email}`);
  };

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
      <div style={styles.createAccount} onClick={handleCreateAccount}>
        Create Account
      </div>
    </div>
  );
}

export default Login;
