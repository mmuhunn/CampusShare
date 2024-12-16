import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SubjectList from "./pages/SubjectList";
import CreateAccount from "./pages/CreateAccount";
import Board from "./pages/Board";
import NewPost from "./pages/NewPost";
import PopularPosts from "./pages/PopularPosts"; // 추가
import Ranking from "./pages/Ranking";

const App = () => {
  // coursesData 상태를 관리하기 위한 useState 추가
  const [coursesData, setCoursesData] = useState([]);
  
  return (
    <Router>
      {/* Header에 setCoursesData 전달 */}
      <Header setCoursesData={setCoursesData} />
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/subjectlist" element={<SubjectList />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        {/* Board와 NewPost에 coursesData 전달 */}
        <Route path="/board" element={<Board coursesData={coursesData} />} />
        <Route path="/newpost" element={<NewPost coursesData={coursesData} />} />
        <Route path="/popular-posts" element={<PopularPosts />} /> {/* 추가 */}
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
};


export default App;
