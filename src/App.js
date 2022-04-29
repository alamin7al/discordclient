import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import CrudHome from './pages/crud/CrudHome';
import UserEdit from './pages/crud/UserEdit';
const Home = lazy(() => import('./pages/Home/Home'));
const Deshbordgo = lazy(() => import('./pages/profile/Deshbordgo'));
const Nitro = lazy(() => import('./pages/nitro/Nitro'));
const DownloadHome = lazy(() => import('./pages/download/DownloadHome'));
const SaftyHome = lazy(() => import('./pages/safety/SaftyHome'));
const BlogHome = lazy(() => import('./pages/blog/BlogHome'));
const HelpHome = lazy(() => import('./pages/Help/HelpHome'));
const CarereHome = lazy(() => import('./pages/carear/CarereHome'));
const Login = lazy(() => import('./pages/login/Login'));
const AuthProvider = lazy(() => import('./pages/login/AuthProvider'));
const Register = lazy(() => import('./pages/login/Register'))
// import ProfileHome from './pages/profile/ProfileHome';
const EditProfile = lazy(() => import('./pages/profile/EditProfile'));
const ScrollToTop = lazy(() => import('./pages/scrol/ScrollToTop'));
const ProfileHome = lazy(() => import('./pages/profile/ProfileHome'));
function App() {
  AOS.init();
  return (
    <div className="App">
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
        <AuthProvider>
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
              <Route path="/deshbordgo" element={<Deshbordgo />} />
              <Route path="/crud" element={<CrudHome />} />
              <Route path={`/edit/:id`} element={<EditProfile />} />
              <Route path={`/useredit/:id`} element={<UserEdit />} />
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Home />} />

            </Routes>
          </BrowserRouter>
        </AuthProvider>
        <ScrollToTop />
      </Suspense>

    </div>
  );
}

export default App;
