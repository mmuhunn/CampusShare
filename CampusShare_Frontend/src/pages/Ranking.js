import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  pageContainer: {
    fontFamily: "'Poppins', sans-serif",
    color: "#6b4f4f",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px"
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "400",
    margin: "20px 0",
  },
  introText: {
    marginBottom: "30px",
  },
  // Popular posts styles
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
  // Ranking podium styles
  rankingContainer: {
    marginTop: "60px",
    textAlign: "center",
  },
  rankingTitle: {
    fontSize: "2rem",
    marginBottom: "30px",
  },
  podiumContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "40px",
    margin: "50px auto",
    width: "600px",
    maxWidth: "100%",
  },
  podium: {
    width: "150px",
    background: "#f2f2f2",
    borderRadius: "5px 5px 0 0",
    textAlign: "center",
    position: "relative",
    padding: "10px",
    boxSizing: "border-box",
    color: "#6b4f4f",
  },
  first: {
    height: "250px",
    background: "#ffd700", // gold
  },
  second: {
    height: "200px",
    background: "#c0c0c0", // silver
  },
  third: {
    height: "150px",
    background: "#cd7f32", // bronze
  },
  position: {
    fontSize: "3em",
    fontWeight: "bold",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  avatar: {
    marginTop: "80px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    margin: "0 auto",
    backgroundColor: "#fff",
    border: "2px solid #fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#6b4f4f",
    fontSize: "1.2rem",
  },
  name: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  score: {
    marginTop: "5px",
    fontSize: "0.9em",
    color: "#555",
  },
};

function Home() {
  const [popularPosts, setPopularPosts] = useState([]);
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    fetchPopularPosts();
    fetchRankingData();
  }, []);

  const fetchPopularPosts = () => {
    const mockPopularPosts = [
      { id: 1, title: "Who is your favorite Professor", excerpt: "Josué Obregón", subject: "Who is your favorite professor" },
      { id: 2, title: "JavaScript Tips", excerpt: "Master JS", subject: "js-tips" },
      { id: 3, title: "CSS Tricks", excerpt: "Style it!", subject: "css-tricks" },
    ];
    setPopularPosts(mockPopularPosts);
  };

  const fetchRankingData = () => {
    // 실제 백엔드 연동 시 여기에 API 호출 로직 추가
    // 지금은 mock 데이터
    const mockRanking = [
      { position: 1, name: "Josué Obregón", score: "기여: 200회" },
      { position: 2, name: "Sué Dragon", score: "기여: 150회" },
      { position: 3, name: "Muhun", score: "기여: 100회" },
    ];
    setRankingData(mockRanking);
  };

  const getPodiumStyle = (position) => {
    switch (position) {
      case 1:
        return { ...styles.podium, ...styles.first };
      case 2:
        return { ...styles.podium, ...styles.second };
      case 3:
        return { ...styles.podium, ...styles.third };
      default:
        return styles.podium;
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.heading}>Welcome to CampusShare!</h1>
      <p style={styles.introText}>
        A collaborative space for mutual learning and growth.
      </p>

      {/* Popular Posts Section */}
      <div style={styles.popularPosts}>
        <h2>Popular Posts</h2>
        {popularPosts.length > 0 ? (
          popularPosts.map((post) => (
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
        <Link to="/popular-posts" style={styles.viewAllLink}>
          View All Popular Posts
        </Link>
      </div>

      {/* Ranking Section (Podium) */}
      <div style={styles.rankingContainer}>
        <h2 style={styles.rankingTitle}>Top Contributors</h2>
        <div style={styles.podiumContainer}>
          {rankingData.map((rank) => (
            <div key={rank.position} style={getPodiumStyle(rank.position)}>
              <div style={styles.position}>{rank.position}</div>
              <div style={styles.avatar}>
                {/* 아바타 대신 이니셜 등으로 표시 */}
                {rank.name.slice(0,1)}
              </div>
              <div style={styles.name}>{rank.name}</div>
              <div style={styles.score}>{rank.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
