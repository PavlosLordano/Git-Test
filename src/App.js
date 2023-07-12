import logo from './logo.svg';
import './App.css';
import React, { createContext } from 'react';
import { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
