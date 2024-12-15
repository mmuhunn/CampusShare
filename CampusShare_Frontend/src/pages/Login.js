
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


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
    textDecoration: "underline",
  },
};

function Login() {
  const [email, setEmail] = useState(""); // useState로 email 상태 정의
  const [password, setPassword] = useState(""); // useState로 password 상태 정의
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 검증 정규식
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!password) {
      alert("Please enter your password.");
      return;
    }

    alert(`Logged in with Email: ${email}`); // 성공적으로 로그인 시 알림
  };


  const handleCreateAccount = () => {
    navigate("/create-account"); // 계정 생성 페이지로 이동
  };


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)} // email 입력 핸들러
        required
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)} // password 입력 핸들러
        required
      />
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
      <Link to="/createaccount" style={styles.createAccount}>
        Create Account
      </Link>
    </div>
  );
}

export default Login;
