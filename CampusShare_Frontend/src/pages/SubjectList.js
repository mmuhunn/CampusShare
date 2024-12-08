import React from "react";
import { Link } from "react-router-dom";

function SubjectList() {
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
    subjectList: {
      listStyleType: "none",
      padding: 0,
    },
    subjectItem: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: "1.2rem",
      margin: "10px 0",
      padding: "10px",
      backgroundColor: "#e8eaf6",
      color: "#283593",
      borderRadius: "5px",
      textDecoration: "none",
      display: "block",
      transition: "background-color 0.3s ease",
    },
    subjectItemHover: {
      backgroundColor: "#c5cae9",
    },
  };

  const subjects = [
    "Business Process Management",
    "Engineering Math",
    "Communication II",
    "Open Source SW",
    "Data Structure",
    "Computer System",
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Subject List</h1>
      <ul style={styles.subjectList}>
        {subjects.map((subject, index) => (
          <li key={index}>
            <Link
              to={`/board/${subject.toLowerCase().replace(/ /g, "-")}`}
              style={styles.subjectItem}
            >
              {subject}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;
