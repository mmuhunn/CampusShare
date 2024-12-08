import React from "react";

const styles = {
  heading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.5rem",
    fontWeight: "400",
    color: "#6b4f4f",
    textAlign: "center",
    margin: "20px 0",
  },
  about: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555", // 부드러운 텍스트 색상
    maxWidth: "800px",
    margin: "20px auto", // 중앙 정렬
    padding: "10px",
    textAlign: "justify", // 양쪽 정렬
    backgroundColor: "#f9f9f9", // 부드러운 배경색
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

function Home() {
  return (
    <div>
      <h1 style={styles.heading}>Welcome to CampusShare!</h1>
      <div style={styles.about}>
        <h2>About CampusShare</h2>
        <p>
          CampusShare is a collaborative platform designed to connect ITM students by sharing academic resources and fostering a supportive learning community. Our mission is to empower students through collaboration and innovation, leaving a legacy of valuable knowledge for future learners.
        </p>
        <h3>What We Offer:</h3>
        <ul>
          <li>A space to <strong>upload and download lecture materials, assignment guides, and summarized notes</strong>.</li>
          <li>A <strong>comment and feedback system</strong> to facilitate communication and enhance understanding.</li>
          <li>Tools for <strong>evaluating lectures and professors</strong>, offering insights into teaching styles and preferences.</li>
          <li>A <strong>participation ranking system</strong> to recognize contributions and encourage active involvement.</li>
        </ul>
        <h3>Our Vision:</h3>
        <p>
          Build a <strong>sustainable academic platform</strong> for recording and referencing experiences. Expand beyond ITM to include students from other departments and universities. Lay the groundwork for teamwork and potential contributions to <strong>open-source projects</strong>.
        </p>
        <p>CampusShare is more than just a resource hub; it’s a growing community that thrives on <strong>collaboration, resource sharing, and continuous improvement</strong>. Join us in shaping a brighter academic future!</p>
      </div>
    </div>
  );
}

export default Home;
