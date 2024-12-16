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
  const [reviews, setReviews] = useState([]);

  const samplePosts = {
    "1-1": [
      { id: 1, title: "English Writing I - Assignment", content: "Write an essay about your hobbies.", course: "English Writing I" },
    { id: 2, title: "English Listening I - Practice", content: "Listen to the provided audio and summarize the main points.", course: "English Listening I" },
    { id: 3, title: "Presentation I - Speech Practice", content: "Prepare a 5-minute presentation about your favorite topic.", course: "Presentation I" },
    { id: 4, title: "Business Information Systems - Case Study", content: "Analyze the case study on digital transformation.", course: "Business Information Systems" },
    { id: 5, title: "Calculus I - Homework", content: "Solve exercises from chapter 2 and 3.", course: "Calculus I" },
    { id: 6, title: "Career Design and Employment Planning - Workshop", content: "Participate in the career planning workshop next week.", course: "Career Design and Employment Planning" },

    ],
    "1-2": [
      { id: 7, title: "Logical Writing - Assignment", content: "Write a persuasive essay.", course: "Logical Writing" },
      { id: 8, title: "Programming Language - Project", content: "Develop a simple calculator in Python.", course: "Programming Language" },
      { id: 9, title: "Statistical Analysis - Quiz", content: "Quiz scheduled for next week.", course: "Statistical Analysis" },
    ],
    "2-1": [
    { id: 10, title: "Advanced Mathematics - Midterm", content: "Prepare for the midterm exam.", course: "Advanced Mathematics" },
    { id: 11, title: "Database Systems - Lab", content: "Complete lab exercise 4.", course: "Database Systems" },
  ],
  "2-2": [
    { id: 12, title: "Operating Systems - Project", content: "Build a simple OS scheduler.", course: "Operating Systems" },
    { id: 13, title: "Network Security - Report", content: "Write a report on network vulnerabilities.", course: "Network Security" },
  ],
  "3-1": [
    { id: 14, title: "Algorithm - Assignment", content: "Solve problems on dynamic programming.", course: "Algorithm" },
    { id: 15, title: "Computer Networks - Lab", content: "Implement a basic TCP server.", course: "Computer Networks" },
  ],
  "3-2": [
    { id: 16, title: "Mobile Programming - Project", content: "Develop a basic Android app.", course: "Mobile Programming" },
    { id: 17, title: "Big Data Practice - Analysis", content: "Analyze the given dataset using Hadoop.", course: "Big Data Practice" },
  ],
  "4-1": [
    { id: 18, title: "Capstone Design I - Proposal", content: "Submit your project proposal.", course: "Capstone Design I" },
    { id: 19, title: "UX Analytics - Presentation", content: "Present your user experience analysis.", course: "UX Analytics" },
  ],
  "4-2": [
    { id: 20, title: "Capstone Design II - Final Report", content: "Submit the final project report.", course: "Capstone Design II" },
    { id: 21, title: "Simulation - Assignment", content: "Simulate the given system model.", course: "Simulation" },
  ],
  };

  const sampleReviews = {
    "English Writing I": [
    { id: 1, review: "This course helped me improve my writing significantly. ★★★★" },
    { id: 2, review: "Assignments were practical and engaging. ★★★★" },
  ],
  "English Listening I": [
    { id: 1, review: "The audio exercises were challenging but effective. ★★★★" },
    { id: 2, review: "I learned a lot about active listening. ★★★★" },
  ],
  "Presentation I": [
    { id: 1, review: "This course boosted my confidence in public speaking. ★★★★★" },
    { id: 2, review: "Practical tips and feedback were very helpful. ★★★★" },
  ],
  "Business Information Systems": [
    { id: 1, review: "Real-world case studies made the course engaging. ★★★★★" },
    { id: 2, review: "Good overview of how businesses use information systems. ★★★★" },
  ],
  "Calculus I": [
    { id: 1, review: "The explanations were clear, and examples were helpful. ★★★★" },
    { id: 2, review: "Some concepts were difficult, but practice helped a lot. ★★★★" },
  ],
  "Career Design and Employment Planning": [
    { id: 1, review: "The workshops were insightful and practical for career preparation. ★★★★" },
    { id: 2, review: "A great course for self-reflection and planning. ★★★★★" },
  ],
  "Advanced Mathematics": [
    { id: 1, review: "Challenging but very rewarding. ★★★★" },
    { id: 2, review: "The concepts are tough, but the instructor makes them easier to understand. ★★★★" },
  ],
  "Database Systems": [
    { id: 1, review: "The practical labs are very useful. ★★★★" },
    { id: 2, review: "Clear explanations with real-world examples. ★★★★" },
  ],
  "Operating Systems": [
    { id: 1, review: "Great hands-on projects. ★★★★★" },
    { id: 2, review: "A bit challenging but very informative. ★★★★" },
  ],
  "Network Security": [
    { id: 1, review: "The course teaches practical skills for securing networks. ★★★★★" },
    { id: 2, review: "Useful examples, but the pace is a bit fast. ★★★★" },
  ],
  "Algorithm": [
    { id: 1, review: "Perfect for strengthening problem-solving skills. ★★★★★" },
    { id: 2, review: "Assignments are tough but rewarding. ★★★★" },
  ],
  "Computer Networks": [
    { id: 1, review: "Labs are well-designed to understand network protocols. ★★★★" },
    { id: 2, review: "Theoretical content is balanced with practical work. ★★★★" },
  ],
  "Mobile Programming": [
    { id: 1, review: "Very interesting and practical for app development. ★★★★★" },
    { id: 2, review: "Good course, but requires prior programming knowledge. ★★★★" },
  ],
  "Big Data Practice": [
    { id: 1, review: "Hands-on experience with big data tools. ★★★★★" },
    { id: 2, review: "Challenging but provides excellent real-world skills. ★★★★" },
  ],
  "Capstone Design I": [
    { id: 1, review: "Excellent guidance for final projects. ★★★★★" },
    { id: 2, review: "Collaborative and rewarding experience. ★★★★★" },
  ],
  "UX Analytics": [
    { id: 1, review: "Insightful and practical for UX design. ★★★★★" },
    { id: 2, review: "Good mix of theory and practical application. ★★★★" },
  ],
  "Capstone Design II": [
    { id: 1, review: "A great way to showcase your skills. ★★★★★" },
    { id: 2, review: "Final deliverables are demanding but worth it. ★★★★" },
  ],
  "Simulation": [
    { id: 1, review: "The simulations are realistic and engaging. ★★★★★" },
    { id: 2, review: "Challenging assignments but very informative. ★★★★" },
  ],
}

  useEffect(() => {
    const key = `${grade}-${semester}`;
    const filteredPosts = course
      ? (samplePosts[key] || []).filter((post) => post.course === course)
      : samplePosts[key] || [];
    setPosts(filteredPosts);

    if (course) {
      setReviews(sampleReviews[course] || []);
    }
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

      <div style={styles.reviewsSection}>
  {course && (
    <>
      <h3 style={styles.reviewsHeading}>Reviews for {course}</h3>
      {reviews.length > 0 ? (
        <ul style={styles.reviewsList}>
          {reviews.map((review) => (
            <li key={review.id} style={styles.reviewItem}>
              {review.review}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this course.</p>
      )}
    </>
  )}
</div>

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
  showAllButton: {
    padding: "8px 15px",
    backgroundColor: "#aaa",  // 회색으로 변경
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
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
  reviewsSection: {
    marginTop: "30px",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  reviewsHeading: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  },
  reviewsList: {
    listStyle: "none",
    padding: 0,
  },
  reviewItem: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "5px",
  },
};

export default Board;
