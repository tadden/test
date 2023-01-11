import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import GlobalStyles from "./styles/Global";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Routes>
          <Route path="/*" element={<HomePage />}></Route>
          <Route path="/:id/" element={<CategoryPage />}></Route>
        </Routes>
      </AppWrapper>
    </>
  );
}

export default App;

const AppWrapper = styled("div")``;
