import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bikes from './Pages/Bikes';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bikes" element={<Bikes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
