import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import {App} from './App';




ReactDOM.createRoot(document.getElementById('App')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

