import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReadFile from "./components/ReadFile";
import Output from "./components/Output";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReadFile />} />
          <Route path="/output" element={<Output />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
