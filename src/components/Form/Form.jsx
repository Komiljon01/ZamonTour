import "./Form.scss";

// Icons
import { IoCall, IoMail } from "react-icons/io5";
import { FaLocationPin } from "react-icons/fa6";

function Form() {
  return (
    <section className="form">
      <div className="container">
        <div className="form__cards">
          <div className="form__card">
            <span className="form__card-icon">
              <IoCall />
            </span>
            <h3 className="form__card-title">Make a Phone Call</h3>
            <a className="form__card-link" href="tel:+998992999996">
              +998 99 299 99 96
            </a>
          </div>
          <div className="form__card">
            <span className="form__card-icon">
              <IoMail />
            </span>
            <h3 className="form__card-title">Contact Us via Email</h3>
            <a
              className="form__card-link"
              href="mailto:zamonbiznestour@mail.ru"
            >
              zamonbiznestour@mail.ru
            </a>
          </div>
          <div className="form__card">
            <span className="form__card-icon">
              <FaLocationPin />
            </span>
            <h3 className="form__card-title">Visit Our Offices</h3>
            <p className="form__card-text">
              15/25, Chilanzar - 9, Tashkent city
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.5342977415352!2d69.28219406195052!3d41.33762317356133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b52154ebd3f%3A0x1b75d2ab6395d2e5!2sInternational%20Hotel%20Tashkent%2C%20Amir%20Temur%20Avenue%20107A%2C%20100084%2C%20Tashkent%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1721196018990!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="form__map"
        ></iframe>

        <form className="form__content">
          <h2 className="form__content-title">
            Make Your <span>Reservation</span> Through This <span>Form</span>
          </h2>

          <div className="form__content-row">
            <label>
              <span>Your Name</span>
              <input
                type="text"
                placeholder="Ex. John Smithee"
                required
                name="name"
              />
            </label>

            <label>
              <span>Your Phone Number</span>
              <input
                type="tel"
                placeholder="Ex. +99899 999 99 99"
                required
                name="tel"
              />
            </label>
          </div>

          <div className="form__content-row">
            <label>
              <span>Number Of Guests</span>
              <select name="guests" required>
                <option value="ex. 3 or 4 or 5">ex. 3 or 4 or 5</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </label>

            <label>
              <span>Check In Date</span>
              <input type="date" name="date" required />
            </label>
          </div>

          <label>
            <span>Choose Your Destination</span>
            <select name="destination" required>
              <option value="Antalya">Antalya</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Dubai">Dubai</option>
              <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
              <option value="Kuala Lumpur">Kuala Lumpur</option>
              <option value="Canada">Canada</option>
              <option value="England">England</option>
            </select>
          </label>

          <label>
            <span>Choose Your Visa Support</span>
            <select name="visa" required>
              <option value="USA">USA</option>
              <option value="Europe">Europe</option>
              <option value="England">England</option>
              <option value="Japan">Japan</option>
              <option value="Oman">Oman</option>
              <option value="Saudia Arabia">Saudia Arabia</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Hong Kong">Hong Kong</option>
            </select>
          </label>

          <button className="form__content-btn">
            Make Your Reservation Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
