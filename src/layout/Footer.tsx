import './Footer.scss';
export const Footer = () => (
  <footer>
    <div className="footer--row">

      <div className="footer--social">
        <a href="https://www.facebook.com/relaxtimeszeged" target="_blank">
          <i className="fa-brands fa-square-facebook fa-5x"></i>
        </a>
      </div>

      <div className="footer--contacts">
        <div className="footer--contact">
          <i className="fa-solid fa-mobile fa-xl"></i>
          <h3 className="footer--contact--mobile">+36 30 769 5108</h3>
        </div>
        <div className="footer--contact">
          <i className="fa-sharp fa-solid fa-location-dot fa-xl"></i>
          <h3 className="footer--contact--mobile">
            6721, Szeged, Csongrádi sgt. 12.
          </h3>
        </div>
      </div>
    </div>

    <div className="footer--row">
      <p>© 2022 Candywolf.</p>
    </div>
  </footer>
);
