import React, { useState, useEffect } from "react";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    textAlign: "left",
  },
  heading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.5rem",
    fontWeight: "400",
    color: "#6b4f4f",
    textAlign: "center",
    marginBottom: "20px",
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
    color: "#6b4f4f",
    fontSize: "1.1rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  postTime: {
    color: "#6b4f4f",
    fontSize: "0.9rem",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  pageButton: {
    padding: "10px 15px",
    margin: "0 5px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    color: "#6b4f4f",
  },
  activePageButton: {
    backgroundColor: "#6b4f4f",
    color: "#fff",
    border: "none",
  },
};

function PopularPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = () => {
    const firstPagePosts = [
      { id: 1, title: "How to improve your writing skills", time: "2 years ago" },
      { id: 2, title: "I think Josué is the best professor", time: "3 months ago" },
      { id: 3, title: "Understanding Calculus: Tips and Tricks", time: "9 months ago" },
      { id: 4, title: "Best practices for effective teamwork", time: "1 year ago" },
      { id: 5, title: "Exploring data structures in Python", time: "2 months ago" },
    ];

    const additionalPosts = [
      { id: 6, title: "The Future of Artificial Intelligence", time: "10 mins ago" },
      { id: 7, title: "Top 5 Mistakes in Resume Writing", time: "15 mins ago" },
      { id: 8, title: "Effective Study Strategies for Finals", time: "20 mins ago" },
      { id: 9, title: "Exploring the Basics of Blockchain", time: "25 mins ago" },
      { id: 10, title: "How to Stay Focused in Online Classes", time: "30 mins ago" },
      { id: 11, title: "Mastering Public Speaking Skills", time: "35 mins ago" },
      { id: 12, title: "The Science Behind Memory Retention", time: "40 mins ago" },
      { id: 13, title: "The Importance of Mental Health in College", time: "45 mins ago" },
      { id: 14, title: "Top 10 Books for Personal Development", time: "50 mins ago" },
      { id: 15, title: "How to Start a Successful Side Project", time: "55 mins ago" },
      { id: 16, title: "Understanding the Basics of Cloud Computing", time: "1 hour ago" },
      { id: 17, title: "The Role of UX in Modern Web Design", time: "1 hour 5 mins ago" },
      { id: 18, title: "How to Prepare for a Tech Job Interview", time: "1 hour 10 mins ago" },
      { id: 19, title: "The Benefits of Learning Multiple Languages", time: "1 hour 15 mins ago" },
      { id: 20, title: "How to Develop Critical Thinking Skills", time: "1 hour 20 mins ago" },
    ];

    setAllPosts([...firstPagePosts, ...additionalPosts]);
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>All Popular Posts</h1>
      <ul style={styles.postList}>
        {currentPosts.map((post) => (
          <li key={post.id} style={styles.postItem}>
            <span style={styles.postTitle}>{post.title}</span>
            <span style={styles.postTime}>{post.time}</span>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div style={styles.pagination}>
        {currentPage > 1 && (
          <button
            style={styles.pageButton}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt;
          </button>
        )}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              style={{
                ...styles.pageButton,
                ...(currentPage === page ? styles.activePageButton : {}),
              }}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )}
        {currentPage < totalPages && (
          <button
            style={styles.pageButton}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default PopularPosts;
