import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Sync from "./Sync";
import Update from "./Update"
import Manage from "./Manage"
const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Dashboard />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/sync" element={<Sync />} />
     <Route path="/update" element={<Update />} />
     <Route path="/manage" element={<Manage />} />
    </Routes>
  )
}

export default App