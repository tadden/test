import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/*" element={<HomePage />}></Route>
          <Route path="/:id/" element={<CategoryPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
