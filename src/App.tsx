import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/:id/" element={<CategoryPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
