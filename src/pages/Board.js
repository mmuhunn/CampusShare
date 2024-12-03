import React, { useState, useEffect } from "react";
import axios from "axios";

function Board() {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태
  const [title, setTitle] = useState(""); // 업로드할 자료 제목
  const [description, setDescription] = useState(""); // 업로드할 자료 설명
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
    formData.append("description", description);
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8080/posts", formData);
      alert("File uploaded successfully");
      fetchPosts(); // 업로드 후 게시글 목록 갱신
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1>Open Source SW Board</h1>

      {/* 업로드 폼 */}
      <form onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>

      {/* 게시판 목록 */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <a href={`http://localhost:8080/files/${post.filePath}`} download>
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Board;
