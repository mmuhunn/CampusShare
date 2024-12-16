import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai"; // 다운로드 아이콘 추가

const Board = ({ coursesData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const grade = searchParams.get("grade");
  const semester = searchParams.get("semester");
  const course = searchParams.get("course");

  const [posts, setPosts] = useState([]);

  // 샘플 게시글 데이터
  const samplePosts = {
    "1-1": [
      { id: 1, title: "English Writing I - Assignment", content: "Write an essay about your hobbies.", course: "English Writing I", fileUrl: "english-writing-1-assignment.pdf" },
      { id: 2, title: "Calculus I - Homework", content: "Solve problems from chapter 3.", course: "Calculus I", fileUrl: null },
      { id: 3, title: "Business Information Systems - Case Study", content: "Analyze the given case study.", course: "Business Information Systems", fileUrl: "case-study.pdf" },
    ],
    "1-2": [
      { id: 4, title: "Logical Writing - Assignment", content: "Write a persuasive essay.", course: "Logical Writing", fileUrl: "logical-writing-assignment.docx" },
      { id: 5, title: "Programming Language - Project", content: "Develop a simple calculator in Python.", course: "Programming Language", fileUrl: null },
      { id: 6, title: "Statistical Analysis - Quiz", content: "Quiz scheduled for next week.", course: "Statistical Analysis", fileUrl: "statistical-analysis-quiz.xlsx" },
    ],
  };

  useEffect(() => {
    const key = `${grade}-${semester}`;
    const filteredPosts = course
      ? (samplePosts[key] || []).filter((post) => post.course === course)
      : samplePosts[key] || [];
    setPosts(filteredPosts);
  }, [grade, semester, course]);

  const handleDownload = (fileUrl) => {
    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileUrl.split("/").pop();
      link.click();
    } else {
      alert("No file attached for this post.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        Posts for Grade {grade}, Semester {semester}
      </h2>
      <div style={styles.filters}>
        <button
          style={styles.showAllButton}
          onClick={() => navigate(`/board?grade=${grade}&semester=${semester}`)}
        >
          Show All
        </button>
        {coursesData.map((courseName) => (
          <button
            key={courseName}
            style={styles.filterButton}
            onClick={() =>
              navigate(`/board?grade=${grade}&semester=${semester}&course=${courseName}`)
            }
          >
            {courseName}
          </button>
        ))}
      </div>

      <ul style={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} style={styles.postCard}>
            <div style={styles.postHeader}>
              <span style={styles.postTitle}>{post.title}</span>
              <AiOutlineDownload
                style={styles.downloadIcon}
                onClick={() => handleDownload(post.fileUrl)}
              />
            </div>
            <div style={styles.postContent}>{post.content}</div>
          </li>
        ))}
      </ul>
      <button style={styles.writeButton} onClick={() => navigate("/newpost")}>
        Write
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px",
    justifyContent: "center",
  },
  filterButton: {
    padding: "8px 15px",
    backgroundColor: "#6b4f4f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  postList: {
    listStyle: "none",
    padding: 0,
  },
  postCard: {
    backgroundColor: "#fff",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  postHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#6b4f4f",
  },
  postContent: {
    fontSize: "1rem",
    color: "#555",
    marginTop: "5px",
  },
  downloadIcon: {
    fontSize: "1.5rem",
    color: "#6b4f4f", // 브라운 계열
    cursor: "pointer",
  },
  writeButton: {
    marginTop: "20px",
    padding: "15px 30px",
    backgroundColor: "#6b4f4f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    display: "block",
    margin: "20px auto",
    transition: "background-color 0.3s ease",
  },
  showAllButton: {
    padding: "8px 15px",
    backgroundColor: "#aaa",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default Board;
