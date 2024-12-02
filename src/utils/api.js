import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // 백엔드 URL
});

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return api.post("/upload", formData);
};

export default api;
