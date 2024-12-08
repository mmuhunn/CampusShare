import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Board() {
  const { subject } = useParams(); // Getting subject name parameter from URL
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, [subject]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/posts/${subject}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);

    try {
      await axios.post(`http://localhost:8080/posts/${subject}`, formData);
      alert("Upload Success");
      setTitle("");
      setContent("");
      setFile(null);
      fetchPosts(); // Update board list after upload
    } catch (error) {
      console.error("Error uploading post:", error);
    }
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
      fontFamily: "'Poppins', sans-serif",
      fontSize: "2rem",
      fontWeight: "600",
      color: "#6b4f4f",
      textAlign: "center",
      marginBottom: "20px",
    },
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
    postList: {
      listStyleType: "none",
      padding: 0,
    },
    postCard: {
      backgroundColor: "#fff",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "10px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    postTitle: {
      fontSize: "1.2rem",
      fontWeight: "600",
      color: "#6b4f4f",
      marginBottom: "10px",
    },
    postContent: {
      fontSize: "1rem",
      color: "#555",
    },
    downloadLink: {
      marginTop: "10px",
      display: "inline-block",
      color: "#6b4f4f",
      textDecoration: "none",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{subject.replace(/-/g, " ")} Board</h1>
      <form style={styles.form} onSubmit={handleUpload}>
        <h2>Write New</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={styles.input}
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contents"
          style={styles.input}
          rows="5"
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Upload
        </button>
      </form>
      <ul style={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} style={styles.postCard}>
            <h3 style={styles.postTitle}>{post.title}</h3>
            <p style={styles.postContent}>{post.content}</p>
            <a
              href={`http://localhost:8080/files/${post.filePath}`}
              style={styles.downloadLink}
              download
            >
              file download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Board;
