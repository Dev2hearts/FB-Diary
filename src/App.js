import "./scss/main.scss";
import ModuleCSS from "./module/Wrap.module.css";

import { Route, Routes } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Diary from "./pages/Diary";
import Todo from "./pages/Todo";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <h1 className={ModuleCSS.AppTitle}>FireBase를 활용한 Diary</h1>
      <Header />
      <div className={ModuleCSS.Wrap}>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/diary" element={<Diary />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
