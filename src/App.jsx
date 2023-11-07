import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/cereals" element={<Index />} />
          <Route path="/cereals/new" element={<New />} />
          <Route path="/cereals/:index" element={<Show />} />
          <Route path="/cereals/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
