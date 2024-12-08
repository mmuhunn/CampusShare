import React from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate 추가
import logo from "../CapusShare_logo.png"; // 로고 경로 수정

function Header() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLoginClick = () => {
    navigate("/login"); // 로그인 페이지로 이동
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="CampusShare Logo" style={styles.logo} />
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/board" style={styles.link}>Board</Link>
        <button style={styles.loginButton} onClick={handleLoginClick}>
          Login
        </button>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    width: "100%",
    maxWidth: "800px",
    textAlign: "center",
    margin: "0 auto",
  },
  logo: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  nav: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    padding: "8px 12px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  loginButton: {
    padding: "8px 12px",
    backgroundColor: "#6b4f4f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Header;
