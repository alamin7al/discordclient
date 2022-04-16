import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import Nitro from './pages/nitro/Nitro';
import DownloadHome from './pages/download/DownloadHome';
import SaftyHome from './pages/safety/SaftyHome';
import BlogHome from './pages/blog/BlogHome';
import HelpHome from './pages/Help/HelpHome';
import CarereHome from './pages/carear/CarereHome';
// const Navigation = lazy(() => import('./pages/Navigation/Navigation')) ;

const Home = lazy(() => import('./pages/Home/Home'));
function App() {
  return (
    <div className="App">

      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          {/* <Navigation></Navigation> */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/nitro" element={<Nitro />} />
            <Route path="/download" element={<DownloadHome />} />
            <Route path="/safty" element={<SaftyHome />} />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/help" element={<HelpHome />} />
            <Route path="/carer" element={<CarereHome />} />
            <Route path="/" element={<Home />} />

          </Routes>
        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
