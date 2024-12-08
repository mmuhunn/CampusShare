import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

function Board() {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태
  const [title, setTitle] = useState(""); // 제목 상태
  const [content, setContent] = useState(""); // CKEditor 내용 상태
  const [file, setFile] = useState(null); // 업로드할 파일

  // 게시글 목록 불러오기
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/posts");
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
      await axios.post("http://localhost:8080/posts", formData);
      alert("File uploaded successfully");
      setTitle("");
      setContent("");
      setFile(null);
      fetchPosts(); // 업로드 후 게시글 목록 갱신
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="page-container">
    <div style={styles.container}>
      <h1 style={styles.heading}> ITM Board</h1>

      {/* 업로드 폼 */}
      <form onSubmit={handleUpload} style={styles.form}>
        {/* 제목 입력 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            placeholder="제목을 입력하세요"
            required
          />
        </div>

        {/* CKEditor */}
        <div style={styles.editorGroup}>
          <label style={styles.label}>내용</label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        </div>

        {/* 파일 업로드 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>파일</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={styles.fileInput}
            required
          />
        </div>

        {/* 제출 버튼 */}
        <button type="submit" style={styles.button}>
          업로드
        </button>
      </form>

      {/* 게시판 목록 */}
      <ul style={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} style={styles.postItem}>
            <h2 style={styles.postTitle}>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            <a
              href={`http://localhost:8080/files/${post.filePath}`}
              download
              style={styles.downloadLink}
            >
              파일 다운로드
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}

// 스타일링
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  editorGroup: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  fileInput: {
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    alignSelf: "center",
  },
  postList: {
    listStyleType: "none",
    padding: 0,
  },
  postItem: {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  postTitle: {
    marginBottom: "10px",
    fontWeight: "bold",
  },
  downloadLink: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Board;
