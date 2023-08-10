import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route to="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
