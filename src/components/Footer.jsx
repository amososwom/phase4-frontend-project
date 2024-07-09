import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@realestateapp.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Real Estate St., Property City, Country</p>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Our mission is to simplify the process of buying, selling, and
            renting properties.
          </p>
          <p>
            We provide the best real estate services to help you find your dream
            home or investment property.
          </p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-media">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Real Estate App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
