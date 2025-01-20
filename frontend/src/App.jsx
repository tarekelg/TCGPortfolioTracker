import { useState } from "react";

import "./App.css";
import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
