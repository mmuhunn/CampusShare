import React from "react";

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
};

function CreateAccount() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Account</h2>
      <p>계정을 생성할 수 있는 페이지를 여기서 구현하세요.</p>
    </div>
  );
}

export default CreateAccount;
