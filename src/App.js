import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
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
import Login from './pages/login/Login';
import AuthProvider from './pages/login/AuthProvider';
import Register from './pages/login/Register';

import ProfileHome from './pages/profile/ProfileHome';
import EditProfile from './pages/profile/EditProfile';
import { Spinner } from 'react-bootstrap';
import ScrollToTop from './pages/scrol/ScrollToTop';
// const Navigation = lazy(() => import('./pages/Navigation/Navigation')) ;

const Home = lazy(() => import('./pages/Home/Home'));
function App() {
AOS.init();

  return (
    <div className="App">

      <AuthProvider>
        <Suspense fallback={<div style={{ marginTop: '250px' }}>
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="dark" />

          </div>}>
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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<ProfileHome />} />
              <Route path="edit/:editid" element={<EditProfile />} />
              <Route path="/" element={<Home />} />

            </Routes>
          </BrowserRouter>
        </Suspense>
      </AuthProvider>
      <ScrollToTop />

    </div>
  );
}

export default App;
