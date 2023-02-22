import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Sync from "./Pages/Sync";
import Update from "./Pages/Update";
import Manage from "./Pages/Manage";
import AppBarDrawer from "./Components/AppBarDrawer";
import Demo from "./Pages/Demo";
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sync" element={<Sync />} />
      <Route path="/update" element={<Update />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/appbar" element={<AppBarDrawer />} />
      <Route path="/demo" element={<Demo />} />

    </Routes>
  );
};

export default App;
