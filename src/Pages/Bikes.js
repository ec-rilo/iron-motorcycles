import { useState } from 'react';
import Navbar from '../components/Navbar';
import uniqid from 'uniqid';
import bikeData from '../data/bike-data';
import ViewCollectionBtn from '../components/buttons/ViewCollectionBtn';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Bikes = (props) => {
  const { cart, addToCart } = props;

  const [checkboxes, setCheckboxes] = useState([
    {
      name: 'Trike',
      forId: 'slide-item-1',
      value: false,
      data: bikeData.data[0],
    },
    {
      name: 'Cruiser',
      forId: 'slide-item-2',
      value: true,
      data: bikeData.data[1],
    },
    {
      name: 'Grand American Touring',
      forId: 'slide-item-3',
      value: false,
      data: bikeData.data[2],
    },
  ]);

  const [bikesArr, setBikesArr] = useState([
    { type: 'trike', data: bikeData.trike, class: 'bike-not-selected' },
    { type: 'cruiser', data: bikeData.cruisers, class: 'bike-selected' },
    {
      type: 'grand american touring',
      data: bikeData.gat,
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

  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });

  return (
    <div className="bikes-page">
      <Navbar cart={cart} addToCart={addToCart} />
      <div className="bikes-content">
        <p className="bikes-title">Browse by type</p>
        <div className="slider-container">
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
        </div>
        <div className="bike-wheel">
          {bikesArr.map((item, index) => {
            if (isSmallScreen) {
              return (
                <Link
                  style={{ color: 'var(--primary-clr)' }}
                  key={uniqid()}
                  to={`/bikes/:collection/${item.data[0].name}`}
                  state={{
                    bikeData: item.data[0],
                  }}
                >
                  <div className={`bike-wheel-content ${item.class}`}>
                    <img
                      src={item.data[0].image}
                      className="bike-wheel-img"
                      alt="placeholder"
                    />
                    <div className="bike-wheel-text-content">
                      <p className="bike-wheel-title">{item.data[0].name}</p>
                      <p className="bike-wheel-text">
                        STARTING AT ${item.data[0].price}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            } else {
              return (
                <div
                  className={`bike-wheel-content ${item.class}`}
                  key={uniqid()}
                >
                  {[...Array(3)].map((elem, idx) => {
                    return (
                      <Link
                        key={uniqid()}
                        to={`/bikes/:collection/${item.data[idx].name}`}
                        state={{
                          bikeData: item.data[idx],
                        }}
                        style={{
                          color: 'var(--primary-clr)',
                          textDecoration: 'none',
                        }}
                      >
                        <div className="bike-wheel-item">
                          <img
                            src={item.data[idx].image}
                            className="bike-wheel-img"
                            alt="placeholder"
                          />
                          <div className="bike-wheel-text-content">
                            <p className="bike-wheel-title">
                              {item.data[idx].name}
                            </p>
                            <p className="bike-wheel-text">
                              STARTING AT ${item.data[idx].price}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
        <ViewCollectionBtn
          bikes={bikesArr.find((bike) => bike.class === 'bike-selected').data}
          data={checkboxes.find((cb) => cb.value === true).data}
        />
      </div>
    </div>
  );
};

export default Bikes;
