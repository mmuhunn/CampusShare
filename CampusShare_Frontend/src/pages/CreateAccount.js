import React, { useState } from "react";

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
};

function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    if (!firstName || !lastName || !email || !studentId || !password) {
      alert("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\d+$/.test(studentId)) {
      alert("Student ID must be numeric.");
      return;
    }

    alert(
      `Account created successfully!\nName: ${firstName} ${lastName}\nEmail: ${email}\nStudent ID: ${studentId}`
    );

    // Reset fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setStudentId("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Account</h2>
      <input
        type="text"
        placeholder="First Name"
        style={styles.input}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        style={styles.input}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Student ID"
        style={styles.input}
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
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
      <button style={styles.button} onClick={handleCreateAccount}>
        Create Account
      </button>
    </div>
  );
}

export default CreateAccount;
