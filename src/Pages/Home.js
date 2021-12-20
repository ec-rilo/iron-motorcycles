import ShopNowBtn from '../components/buttons/ShopNowBtn';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-background">
        <p className="home-call-to-action">
          Are you <br />
          ready for an <br />
          adventure?
        </p>
        <ShopNowBtn />
      </div>
    </div>
  );
};

export default Home;
