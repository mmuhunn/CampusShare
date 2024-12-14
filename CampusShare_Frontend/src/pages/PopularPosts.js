import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    textAlign: "center",
  },
  heading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2rem",
    fontWeight: "600",
    color: "#6b4f4f",
    marginBottom: "20px",
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
};

function PopularPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPopularPosts();
  }, []);

  const fetchPopularPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/popular-posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching popular posts:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Popular Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
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
    </div>
  );
}

export default PopularPosts;
