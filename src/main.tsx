import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route } from 'react-router';
import Homepage from './pages/Homepage';
import Purchases from './pages/Purchases';
import Payments from './pages/Payments';
import Login from './pages/Login';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Route path="/" element={<Homepage />} />
    <Route path="/purchase" element={<Purchases />} />
    <Route path="/payments" element={<Payments />} />
    <Route path="/login" element={<Login />} />
  </BrowserRouter>
);
