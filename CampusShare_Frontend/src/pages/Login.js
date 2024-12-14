import React, { useState } from "react";

function Ranking() {
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#6b4f4f",
    },
    podium: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "30px",
    },
    userCard: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "120px",
    },
    firstPlace: {
      backgroundColor: "#FFD700", // Gold color
      color: "#fff",
    },
    secondPlace: {
      backgroundColor: "#C0C0C0", // Silver color
      color: "#fff",
    },
    thirdPlace: {
      backgroundColor: "#CD7F32", // Bronze color
      color: "#fff",
    },
    rankingList: {
      listStyleType: "none",
      padding: 0,
    },
    rankingItem: {
      padding: "10px",
      margin: "5px 0",
      borderRadius: "5px",
      backgroundColor: "#e8eaf6",
      color: "#283593",
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    nickname: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    postCount: {
      fontSize: "1rem",
      color: "#6b4f4f",
    },
  };

  const rankings = [
    { id: 1, nickname: "Alice", postCount: 50 },
    { id: 2, nickname: "Bob", postCount: 40 },
    { id: 3, nickname: "Charlie", postCount: 30 },
    { id: 4, nickname: "Diana", postCount: 25 },
    { id: 5, nickname: "Eve", postCount: 20 },
  ];

  const topThree = rankings.slice(0, 3); // 상위 3명 추출

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Top Contributors</h1>

      {/* 시상대 */}
      <div style={styles.podium}>
        {topThree.map((user, index) => (
          <div
            key={user.id}
            style={{
              ...styles.userCard,
              ...(index === 0
                ? styles.firstPlace
                : index === 1
                ? styles.secondPlace
                : styles.thirdPlace),
            }}
          >
            <h2>{index + 1}위</h2>
            <p style={styles.nickname}>{user.nickname}</p>
            <p style={styles.postCount}>{user.postCount} Posts</p>
          </div>
        ))}
      </div>

      {/* 순위 목록 */}
      <ul style={styles.rankingList}>
        {rankings.map((user, index) => (
          <li key={user.id} style={styles.rankingItem}>
            <span style={styles.nickname}>
              {index + 1}. {user.nickname}
            </span>
            <span style={styles.postCount}>{user.postCount} Posts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ranking;
