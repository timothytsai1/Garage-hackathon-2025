import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import Purchases from './pages/Purchases';
import Payments from './pages/Payments';
import Login from './pages/Login';
import Models from './pages/Models';
import Checkout from './pages/Checkout';
import VRLoader from './pages/VRLoader';

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/purchase" element={<Purchases />} />
    <Route path="/payments" element={<Payments />} />
    <Route path="/login" element={<Login />} />
    <Route path="/models" element={<Models/>} />
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/vrloader" element={<VRLoader/>}/>
  </Routes>
</BrowserRouter>
);
