import Navbar from './Navbar';

const Collection = () => {
  return (
    <div className="collection-container">
      <Navbar />
      <div className="collection-landing-page">
        <div className="collection-landing-cover-container">
          <p className="collection-landing-cover-title">Cruiser</p>
        </div>
        <div className="collection-landing-data-container">
          <div className="collection-landing-data-text-container">
            <p className="collection-landing-data-title">2021 Motorcycles</p>
            <p className="collection-landing-data-text">
              Authentic heritage meets modern technology for power, style, and
              the unadulterated riding experience - around town or along country
              roads.
            </p>
          </div>
          <p className="shop-now-text">SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
