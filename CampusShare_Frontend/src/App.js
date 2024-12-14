import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import SubjectList from "./pages/SubjectList";
import PopularPosts from "./pages/PopularPosts"; // 추가
import Ranking from "./pages/Ranking";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjectlist" element={<SubjectList />} />
        <Route path="/board/:subject" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/popular-posts" element={<PopularPosts />} /> {/* 추가 */}
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}


export default App;

