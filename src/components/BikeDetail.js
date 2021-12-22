import Navbar from './Navbar';
import bikeImg from '../images/bikes/cruisers/iron-883.png';
import AddToCartBtn from './buttons/AddToCartBtn';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import uniqid from 'uniqid';
import { useMediaQuery } from 'react-responsive';

const BikeDetail = () => {
  const location = useLocation();
  const { bikeData } = location.state;
  const [bikeSpecs] = useState([
    { type: 'ENGINE', data: bikeData.engine },
    { type: 'ENGINE TORQUE', data: bikeData['engine torque'] },
    { type: 'FUEL ECONOMY', data: bikeData['fuel economy'] },
  ]);

  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });

  return (
    <div className="bike-detail-container">
      <Navbar />
      <div className="bike-detail-upper-content-container">
        <div className="bike-detail-upper-content">
          <div className="bike-detail-info">
            <div className="bike-detail-title-info">
              <p className="bike-detail-category-name">{bikeData.type}</p>
              <p className="bike-detail-title">{bikeData.name}</p>
            </div>
            <p className="bike-detail-upper-text">{bikeData.description}</p>
            <p className="bike-detail-upper-price">{`$${bikeData.price}`}</p>
          </div>
          <div className="bike-detail-upper-specs">
            {bikeSpecs.map((specs) => {
              return (
                <div key={uniqid()}>
                  <p className="bike-detail-upper-specs-title">{specs.type}</p>
                  <p className="bike-detail-upper-specs-text">{specs.data}</p>
                </div>
              );
            })}
          </div>
          <img className="bike-detail-img" src={bikeData.image} alt="asef" />
        </div>
        <div className="bike-detail-upper-content-lower-contaier">
          <AddToCartBtn />
        </div>
      </div>

      <div className="bike-detail-lower-content">
        <AddToCartBtn />
        <p className="bike-detail-text">
          {bikeData.description}
          <br />
          <span className="bike-detail-price">{`$${bikeData.price}`}</span>
        </p>
        <div className="separation-line"></div>
        <div className="bike-detail-specs-container">
          {bikeSpecs.map((item) => {
            return (
              <div key={uniqid()} className="bike-detail-specs-content">
                <p className="bike-detail-specs-title">{item.type}</p>
                <p className="bike-detail-specs-text">{item.data}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BikeDetail;
