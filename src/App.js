import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Login from "./pages/Login"; // Login 페이지 추가
import CreateAccount from "./pages/CreateAccount"; // CreateAccount 페이지 추가

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<Login />} /> {/* Login 라우트 추가 */}
        <Route path="/create-account" element={<CreateAccount />} /> {/* CreateAccount 라우트 */}
      </Routes>
    </Router>
  );
}

export default App;
