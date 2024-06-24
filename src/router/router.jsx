import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import Dashboard from "../Pages/Dashboard";

export default function router() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
