import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import imgSrc from '../images/Contact/banner-bg-img.jpeg';
import githubSrc from '../images/icons/github-icon.png';
import linkedinSrc from '../images/icons/linkedin-icon.png';
import instaSrc from '../images/icons/insta-icon.png';

const Contact = () => {
  const imgPath = `url(${imgSrc})`;
  return (
    <div className="contact-page">
      <Navbar />
      <Banner text="Contact Us" imgSrc={imgPath} />
      <div className="contact-content-container">
        <div className="contact-content-block">
          <h3 className="contact-content-title">Contact</h3>
          <p>
            To speak with a Iron Motorcycles customer service representative for
            web services:
          </p>
          <p>
            Hours:
            <br />
            Monday - Friday 8:30am to 8:00pm PST
          </p>
          <p>
            Email:{' '}
            <span
              style={{
                color: 'var(--company-clr)',
                fontFamily: 'var(--tertiary-fnt)',
              }}
            >
              ecarrillo046@gmail.com
            </span>
          </p>
        </div>
        <div className="contact-content-block">
          <h3 className="contact-content-title">Social Media</h3>
          <ul className="contact-social-media-container">
            <li>
              <a
                href="https://www.linkedin.com/in/ecarrillo046/"
                rel="noreferrer"
                target="_blank"
                className="social-media-content"
              >
                <img
                  className="social-media-icon"
                  src={linkedinSrc}
                  rel="noopener"
                  target="_blank"
                  alt="Linkedin Icon"
                />
                <p>Linkedin</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ec-rilo"
                rel="noreferrer"
                target="_blank"
                className="social-media-content"
              >
                <img
                  className="social-media-icon"
                  src={githubSrc}
                  alt="Github Icon"
                />
                <p>Github</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ec-rilo"
                rel="noreferrer"
                target="_blank"
                className="social-media-content"
              >
                <img
                  className="social-media-icon"
                  src={instaSrc}
                  rel="noopener"
                  target="_blank"
                  alt="Instagram Icon"
                />
                <p>Instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
