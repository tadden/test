import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/Global";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Routes>
          <Route path="/*" element={<HomePage />}></Route>
          <Route path="/:id" element={<CategoryPage />}></Route>
        </Routes>
      </AppWrapper>
    </>
  );
};

export default App;

const AppWrapper = styled("div")`
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 10px 0;
`;
