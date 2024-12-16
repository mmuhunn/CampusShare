import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../CapusShare_logo.png";

const Header = ({ setCoursesData }) => {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  const grades = ["1", "2", "3", "4"];
  const semesters = ["1", "2"];

  // 수정된 과목 데이터
  const courses = {
    "1-1": ["English Writing I", "English Listening I", "Presentation I", "Business Information Systems", "Calculus I", "Career Design and Employment Planning"],
    "1-2": ["Logical Writing", "Calculus II", "English Writing II", "Presentation II", "Programming Language", "Statistical Analysis"],
    "2-1": ["Accounting Principles", "Engineering Math", "Database Management", "Applied Statistics", "Computer Language", "Communication I"],
    "2-2": ["Business Process Management", "Engineering Math", "Communication II", "Open Source SW", "Data Structure", "Computer System"],
    "3-1": ["Operating Systems Design", "Algorithm", "Computer Networks", "Fundamentals of Finance", "Data Mining", "Web Programming I", "Mathematical Statistics"],
    "3-2": ["Software Engineering", "Management Science", "Mobile Programming", "Enterprise Resources Planning", "Big Data Practice", "Deep Learning", "Stochastic Processes"],
    "4-1": ["Capstone Design I", "Information Security", "Internship", "Strategic Technology Management", "IT Project Management", "Decision Making Theory", "UX Analytics"],
    "4-2": ["Capstone Design II", "Supply Chain Management", "Organizational Behavior", "High Tech Marketing", "Internship", "Data Science Practice", "Simulation"],
  };

  const handleSearch = () => {
    if (selectedGrade && selectedSemester) {
      const key = `${selectedGrade}-${selectedSemester}`;
      const selectedCourses = courses[key] || [];
      setCoursesData(selectedCourses);
      navigate(`/board?grade=${selectedGrade}&semester=${selectedSemester}`);
    } else {
      alert("Please select both Grade and Semester before searching.");
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="CampusShare Logo" style={styles.logo} />
        </Link>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <div style={styles.dropdownContainer}>
          <select
            style={styles.dropdown}
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
          >
            <option value="" disabled>
              Select Grade
            </option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                {grade} Year
              </option>
            ))}
          </select>
          <select
            style={styles.dropdown}
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            <option value="" disabled>
              Select Semester
            </option>
            {semesters.map((semester) => (
              <option key={semester} value={semester}>
                {semester} Semester
              </option>
            ))}
          </select>
          <button style={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
      </nav>
    </header>
    
  );
};

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
    gap: "15px",
    alignItems: "center",
    marginTop: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    padding: "8px 12px",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
    transition: "background-color 0.3s ease",
  },
  dropdownContainer: {
    display: "flex",
    gap: "10px",
  },
  dropdown: {
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
  },
  searchButton: {
    padding: "8px 12px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s ease",
  },
};

export default Header;
