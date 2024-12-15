import React, { useState } from "react";

const NewPost = ({ coursesData }) => {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const styles = {
    form: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      marginBottom: "30px",
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
      padding: "10px 20px",
      backgroundColor: "#6b4f4f",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      marginTop: "10px",
    },
  };

  // 학년 및 학기에 따른 필터링된 과목
  const filteredCourses = Object.values(coursesData).flat();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCourse && title && content) {
      alert(`Course: ${selectedCourse}, Title: ${title}, Content: ${content}`);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      {/* 과목 선택 */}
      <select
        style={styles.input}
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
        disabled={!filteredCourses.length}
      >
        <option value="" disabled>
          {filteredCourses.length ? "Select a Course" : "No courses available"}
        </option>
        {filteredCourses.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>

      {/* 제목 입력 */}
      <input
        type="text"
        placeholder="Title"
        style={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* 내용 입력 */}
      <textarea
        placeholder="Content"
        style={styles.input}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* 제출 버튼 */}
      <button style={styles.button} type="submit">
        Submit
      </button>
    </form>
  );


  
};

export default NewPost;
