import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const styles = {
  heading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.5rem",
    fontWeight: "400",
    color: "#6b4f4f",
    textAlign: "center",
    margin: "20px 0",
  },
  popularPosts: {
    marginTop: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  postCard: {
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    margin: "10px 0",
    textAlign: "left",
    textDecoration: "none",
    color: "#6b4f4f",
    fontSize: "1.1rem",
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
  },
};

function Home() {
  const [popularPosts, setPopularPosts] = useState([]);

  // Fetch popular posts when the component is mounted
  useEffect(() => {
    fetchPopularPosts();
  }, []);

  const fetchPopularPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/popular-posts"); // API URL
      setPopularPosts(response.data);
    } catch (error) {
      console.error("Error fetching popular posts:", error);
    }
  };

  return (
    <div className="page-container">
      {/* Heading Section */}
      <h1 style={styles.heading}>Welcome to CampusShare!</h1>
      <p style={{ textAlign: "center", color: "#6b4f4f", marginBottom: "20px" }}>
        A collaborative space for mutual learning and growth.
      </p>

      {/* Popular Posts Section */}
      <div style={styles.popularPosts}>
        <h2>Popular Posts</h2>
        {popularPosts.length > 0 ? (
          popularPosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              to={`/board/${post.subject}`}
              style={styles.postCard}
            >
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))
        ) : (
          <p>Loading popular posts...</p>
        )}
        {/* Link to view all popular posts */}
        <Link to="/popular-posts" style={styles.viewAllLink}>
          View All Popular Posts
        </Link>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/ranking" style={styles.viewAllLink}>
          View Rankings
        </Link>
      </div>
    </div>
  );
}

export default Home;
