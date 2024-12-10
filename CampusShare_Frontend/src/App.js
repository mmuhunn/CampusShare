import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import SubjectList from "./pages/SubjectList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjectlist" element={<SubjectList />} />
        <Route path="/board/:subject" element={<Board />} /> {/* 동적 경로 */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;

