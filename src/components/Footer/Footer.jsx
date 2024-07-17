import "./Footer.scss";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__content">
        <div className="container">
          <div className="footer__content-info">
            <h2>ARE YOU LOOKING TO TRAVEL ?</h2>
            <p>Make A Reservation By Clicking The Button</p>
          </div>
          <a className="footer__content-btn" href="#">
            Book Yours Now
          </a>
        </div>
      </div>

      <div className="footer__copyrights">
        <div className="container">
          <p>
            Copyright © 2024&nbsp;
            <a href="#">Zamon Business Tour.</a>
            &nbsp;All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
