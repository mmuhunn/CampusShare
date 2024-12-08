import React from "react";
import { Link } from "react-router-dom";
import logo from "../CapusShare_logo.png"; // 로고 경로 수정

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="CampusShare Logo" style={styles.logo} />
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/board" style={styles.link}>Board</Link>
        <button style={styles.loginButton} onClick={() => alert("Login clicked!")}>
          Login
        </button>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    flexDirection: "column", // 로고와 네비게이션을 수직으로 배치
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    width: "100%", // 전체 박스 너비
    maxWidth: "800px", // 최대 너비 제한
    textAlign: "center",
    margin: "0 auto",
  },
  logo: {
    width: "100%",
    height: "auto",
    borderRadius: "8px", // 둥근 모서리
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // 그림자 추가
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
    backgroundColor: "#6b4f4f", // 따뜻한 갈색 버튼
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Header;
