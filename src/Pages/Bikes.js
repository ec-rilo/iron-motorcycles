import { useState } from 'react';
import Navbar from '../components/Navbar';
import uniqid from 'uniqid';
import bikeData from '../data/bike-data';

const Bikes = () => {
  const [checkboxes, setCheckboxes] = useState([
    { name: 'Trike', forId: 'slide-item-1', value: false },
    { name: 'Cruiser', forId: 'slide-item-2', value: true },
    { name: 'Grand American Touring', forId: 'slide-item-3', value: false },
  ]);

  const [bikesArr, setBikesArr] = useState([
    { type: 'trike', data: bikeData.trike[0], class: 'bike-not-selected' },
    { type: 'cruiser', data: bikeData.cruisers[0], class: 'bike-selected' },
    {
      type: 'grand american touring',
      data: bikeData.gat[0],
      class: 'bike-not-selected',
    },
  ]);

  const checkboxStateHandler = (event, index) => {
    const tempCheckboxes = checkboxes;
    tempCheckboxes.forEach((cb) => {
      if (cb.value === true) cb.value = false;
    });

    tempCheckboxes[index] = {
      ...tempCheckboxes[index],
      value: event.target.checked,
    };

    setCheckboxes([...tempCheckboxes]);

    const bar = document.querySelector('.bar');
    ['first-selected', 'second-selected', 'third-selected'].forEach((item) => {
      bar.classList.remove(item);
    });

    if (event.target.name === 'slide-item-1') {
      bar.classList.add('first-selected');
    } else if (event.target.name === 'slide-item-2') {
      bar.classList.add('second-selected');
    } else if (event.target.name === 'slide-item-3') {
      bar.classList.add('third-selected');
    }
  };

  const toggleBikes = (event, index) => {
    const tempCheckboxes = checkboxes;
    tempCheckboxes.forEach((cb) => {
      if (cb.value === true) cb.value = false;
    });

    tempCheckboxes[index] = {
      ...tempCheckboxes[index],
      value: event.target.checked,
    };

    const bikes = [...bikesArr];
    bikes.forEach((item) => {
      item.class = 'bike-not-selected';
    });

    tempCheckboxes.forEach((item) => {
      if (item.value === true && item.name === 'Trike') {
        bikes[0].class = 'bike-selected';
      }
      if (item.value === true && item.name === 'Cruiser') {
        bikes[1].class = 'bike-selected';
      }
      if (item.value === true && item.name === 'Grand American Touring') {
        bikes[2].class = 'bike-selected';
      }
      setBikesArr(bikes);
    });
  };

  return (
    <div className="bikes-page">
      <Navbar />
      <div className="bikes-content">
        <p className="bikes-title">Browse by type</p>
        <div className="bike-chooser-container">
          {checkboxes.map((cb, index) => {
            const newKey = uniqid();
            return (
              <label key={newKey} htmlFor={cb.forId}>
                <input
                  type="radio"
                  name={cb.forId}
                  id={cb.forId}
                  className="slide-toggle"
                  checked={cb.value}
                  onChange={(e) => {
                    toggleBikes(e, index);
                    checkboxStateHandler(e, index);
                  }}
                />
                <span>{cb.name}</span>
              </label>
            );
          })}
          <div className="slider">
            <div className="bar second-selected"></div>
          </div>
        </div>
        <div className="bike-wheel">
          {bikesArr.map((item, index) => {
            return (
              <div
                className={`bike-wheel-content ${item.class}`}
                key={uniqid()}
              >
                <img
                  src={item.data.image}
                  className="bike-wheel-img"
                  alt="placeholder"
                />
                <div className="bike-wheel-text-content">
                  <p className="bike-wheel-title">{item.data.name}</p>
                  <p className="bike-wheel-text">
                    STARTING AT ${item.data.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bikes;
