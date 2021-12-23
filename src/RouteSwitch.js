import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BikeDetail from './components/BikeDetail';
import Collection from './components/Collection';
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
        <Route path="/bikes/:collection" element={<Collection />} />
        <Route
          path="/bikes/:collection/:bike_detail"
          element={<BikeDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
