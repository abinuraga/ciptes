import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './home.jsx'
import Imgpage from './credential.jsx'
import Project from './project.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css'
import Layanan from './layanan.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/credential" element={<Imgpage />} />
      <Route path= "/project" element={<Project />} />
      <Route path="/layanan" element={<Layanan />} />
      <Route path="/slf" element={<Layanan />} />
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
)