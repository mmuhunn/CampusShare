import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai"; // 아이콘 라이브러리

const NewPost = ({ coursesData }) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null); // 파일 상태 추가

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
    fileButton: {
      padding: "10px",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ddd",
      borderRadius: "50%",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      marginLeft: "10px",
      transition: "background-color 0.3s ease",
    },
    fileInput: {
      display: "none", // 숨김 처리
    },
    fileContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    alert(`Selected file: ${e.target.files[0]?.name}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCourse && title && content) {
      alert(`Course: ${selectedCourse}, Title: ${title}, Content: ${content}, File: ${file?.name || "No file attached"}`);
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
      >
        <option value="" disabled>
          {Object.keys(coursesData).length ? "Select a Course" : "No courses available"}
        </option>
        {coursesData.map((course, index) => (
    <option key={index} value={course}>
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

      <div style={styles.fileContainer}>
        {/* 제출 버튼 */}
        <button style={styles.button} type="submit">
          Submit
        </button>

        {/* 파일 첨부 */}
        <label style={styles.fileButton}>
          <AiOutlinePaperClip />
          <input
            type="file"
            style={styles.fileInput}
            onChange={handleFileChange}
          />
        </label>
      </div>
    </form>
  );
};

export default NewPost;
