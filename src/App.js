import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router 관련 import 추가
import Header from "./components/Header"; // Header 컴포넌트 import
import Home from "./pages/Home"; // Home 컴포넌트 import
import Board from "./pages/Board.js";
import './App.css'; // 스타일 파일 import


function App() {
  return (
    <Router>
      {/* Header는 모든 페이지에서 공통적으로 보여야 하므로 Router 안에서 Routes 위에 배치 */}
      <Header />
      <Routes>
      <Route path="/" element={<Home />} /> {/* Home 페이지 */}
      <Route path="/board" element={<Board />} /> {/*Board 페이지*/}
      </Routes>
    </Router>
  );
}

export default App;
