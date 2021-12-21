import ShopNowBtn from '../components/buttons/ShopNowBtn';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-background">
        <div className="home-content-container">
          <div className="home-call-to-action-content">
            <p className="home-call-to-action">
              Are you <br />
              ready for an <br />
              adventure?
            </p>
            <ShopNowBtn />
          </div>
          <div className="home-aside-text-container">
            <p className="home-aside-text">
              <span className="small-emphasis-text">
                UNLOCK YOUR RIDING POTENTIAL
              </span>
              <br />
              Proudly serving the motorcycle community since 2010
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
