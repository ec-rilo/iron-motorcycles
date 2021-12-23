import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Collection = () => {
  const location = useLocation();
  const { data } = location.state;
  const gradient = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),';
  const bgSize = ' center/cover ';
  const imgSrc = `url(${data.image})`;
  const coverData = gradient + bgSize + imgSrc;
  return (
    <div className="collection-container">
      <Navbar />
      <div className="collection-landing-page">
        <div
          style={{ background: coverData, backgroundSize: 'cover' }}
          className="collection-landing-cover-container"
        >
          <p className="collection-landing-cover-title">{data.type}</p>
        </div>
        <div className="collection-landing-data-container">
          <div className="collection-landing-data-text-container">
            <p className="collection-landing-cover-title">{data.type}</p>
            <p className="collection-landing-data-title">2021 Motorcycles</p>
            <p className="collection-landing-data-text">{data.description}</p>
          </div>
          <p className="shop-now-text">SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
