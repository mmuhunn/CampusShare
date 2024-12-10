import React, { useState } from "react";
import { Link } from "react-router-dom";

function SubjectList() {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

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
    dropdown: {
      margin: "10px 0",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ddd",
      width: "100%",
      fontSize: "1rem",
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
  };

  const subjects = [
    // 2학년 1학기 수업
    { name: "Accounting Principles", grade: "2", semester: "1" },
    { name: "Engineering Math", grade: "2", semester: "1" },
    { name: "Database Management", grade: "2", semester: "1" },
    { name: "Applied Statistics", grade: "2", semester: "1" },
    { name: "Computer Language", grade: "2", semester: "1" },
    { name: "Communication I", grade: "2", semester: "1" },

    // 2학년 2학기 수업
    { name: "Business Process Management", grade: "2", semester: "2" },
    { name: "Engineering Math", grade: "2", semester: "2" },
    { name: "Communication II", grade: "2", semester: "2" },
    { name: "Open Source SW", grade: "2", semester: "2" },
    { name: "Data Structure", grade: "2", semester: "2" },
    { name: "Computer System", grade: "2", semester: "2" },
  ];

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.grade === selectedGrade && subject.semester === selectedSemester
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Select Grade and Semester</h1>
      {/* 학년 선택 */}
      <select
        style={styles.dropdown}
        value={selectedGrade}
        onChange={(e) => setSelectedGrade(e.target.value)}
      >
        <option value="">Select Grade</option>
        <option value="1">1st Year</option>
        <option value="2">2nd Year</option>
        <option value="3">3rd Year</option>
      </select>

      {/* 학기 선택 */}
      <select
        style={styles.dropdown}
        value={selectedSemester}
        onChange={(e) => setSelectedSemester(e.target.value)}
      >
        <option value="">Select Semester</option>
        <option value="1">1st Semester</option>
        <option value="2">2nd Semester</option>
      </select>

      {/* 과목 목록 렌더링 */}
      {selectedGrade && selectedSemester ? (
        <ul style={styles.subjectList}>
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject, index) => (
              <li key={index}>
                <Link
                  to={`/board/${subject.name.toLowerCase().replace(/ /g, "-")}`}
                  style={styles.subjectItem}
                >
                  {subject.name}
                </Link>
              </li>
            ))
          ) : (
            <p>No subjects available for the selected grade and semester.</p>
          )}
        </ul>
      ) : (
        <p>Please select both grade and semester to view subjects.</p>
      )}
    </div>
  );
}

export default SubjectList;