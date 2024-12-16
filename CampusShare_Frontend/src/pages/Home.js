import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  heading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.5rem",
    fontWeight: "400",
    color: "#6b4f4f",
    textAlign: "center",
    margin: "20px 0",
  },
  subText: {
    textAlign: "center",
    color: "#6b4f4f",
    marginBottom: "20px",
    fontSize: "1.2rem",
  },
  popularPostsContainer: {
    marginTop: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left",
  },
  postList: {
    listStyleType: "none",
    padding: 0,
  },
  postItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  postTitle: {
    color: "#6b4f4f", // 글씨 색상을 갈색으로 변경
    fontSize: "1.1rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  postTime: {
    color: "#6b4f4f", // 글씨 색상을 갈색으로 변경
    fontSize: "0.9rem",
  },
  viewAllLink: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#6b4f4f",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
    textAlign: "center",
  },
};

function Home() {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    // Fetch or simulate fetching data for popular posts
    fetchPopularPosts();
  }, []);

  const fetchPopularPosts = () => {
    const mockPosts = [
      { id: 1, title: "How to improve your writing skills", time: "2 years ago" },
      { id: 2, title: "I think Josué is the best professor", time: "3 months ago" },
      { id: 3, title: "Understanding Calculus: Tips and Tricks", time: "9months ago" },
      { id: 4, title: "Best practices for effective teamwork", time: "1 year ago" },
      { id: 5, title: "Exploring data structures in Python", time: "2 months ago" },
    ];
    setPopularPosts(mockPosts);
  };

  return (
    <div className="page-container">
      {/* Welcome Section */}
      <h1 style={styles.heading}>Welcome to CampusShare!</h1>
      <p style={styles.subText}>
        A collaborative space for mutual learning and growth.
      </p>

      {/* Popular Posts Section */}
      <div style={styles.popularPostsContainer}>
        <h2 style={styles.heading}>Popular Posts</h2>
        <ul style={styles.postList}>
  {popularPosts.map((post) => (
    <li key={post.id} style={styles.postItem}>
      <span style={styles.postTitle}>
        {post.title}
      </span>
      <span style={styles.postTime}>{post.time}</span>
    </li>
  ))}
</ul>
        <Link to="/popular-posts" style={styles.viewAllLink}>
          View All Popular Posts
        </Link>
      </div>

      {/* View Rankings Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/ranking" style={styles.viewAllLink}>
          View Rankings
        </Link>
      </div>
    </div>
  );
}

export default Home;
