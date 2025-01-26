import { createRoot } from 'react-dom/client';
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import Purchases from './pages/Purchases';
import Payments from './pages/Payments';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Models from './pages/Models';

createRoot(document.getElementById('root')!).render(
  <ParallaxProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/purchase" element={<Purchases />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/models" element={<Models />} />
      </Routes>
    </BrowserRouter>
  </ParallaxProvider>
);
