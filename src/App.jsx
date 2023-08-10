import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route to="/" />
          <Route to="home" />
          <Route to="UserList" />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
