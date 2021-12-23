import { useLocation, Link } from 'react-router-dom';
import bikeImg from '../images/bikes/cruisers/iron-883.png';
import uniqid from 'uniqid';
import Navbar from './Navbar';

const Collection = () => {
  const location = useLocation();
  const { bikes, data } = location.state;
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
      <div className="collection-catalog-container">
        <p className="bikes-title">Everything you need, Nothing you don't</p>
        <div className="collection-bike-container">
          {bikes.map((bike) => {
            return (
              <Link
                style={{ color: 'var(--primary-clr)', textDecoration: 'none' }}
                key={uniqid()}
                to={`/bikes/:collection/${bike.name}`}
                state={{
                  bikeData: bike,
                }}
              >
                <div key={uniqid()} className="collection-bike">
                  <img
                    className="bike-wheel-img"
                    src={bike.image}
                    alt={`${bike.type} motorcycle - ${bike.name}`}
                  />
                  <div className="bike-wheel-text-content">
                    <p className="bike-wheel-title">{bike.name}</p>
                    <p className="bike-wheel-text">Starting at ${bike.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
