import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="cats/category/*"></Route> */}
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;  
