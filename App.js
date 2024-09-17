import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import AddHabit from "./AddHabit";
import ViewWeekly from "./ViewWeekly";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<AddHabit />} />
          <Route path="/view-weekly" element={<ViewWeekly />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
