import "./Offers.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { offersSliderData } from "../../data";

function Offers() {
  return (
    <section className="offers">
      <h2 className="offers__title">Best Weekly Offers In Each City</h2>
      <p className="offers__text">
        Discover the best weekly offers in each city, curated just for you.
        Immerse yourself in a world of savings and indulge in unparalleled
        experiences.
      </p>

      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="offers__slider"
      >
        {offersSliderData &&
          offersSliderData.map((offer) => (
            <SwiperSlide key={offer.id} className="offers__slider-item">
              <img
                className="offers__slider-item_img"
                src={offer.image}
                alt={offer.title}
              />
              <div className="offers__slider-content">
                <div className="offers__slider-intro">
                  <h3 className="offers__item-title">{offer.title}</h3>
                  <p>{offer.price}</p>
                </div>
                <div className="offers__item-numbers">
                  <p>
                    <FaUsers className="offers__item-numbers-icon" />
                    <span>{offer.people} Check Ins</span>
                  </p>
                  <span>/person</span>
                </div>

                <span className="offers__item-divider"></span>

                <div className="offers__item-info">
                  <h4>Deal Includes:</h4>
                  <p>
                    <FaCar className="offers__item-info-icon" />
                    <span>5 Days Trip</span>
                    <span>&gt;</span>
                    <span>Hotel Included</span>
                  </p>
                  <p>
                    <IoAirplane className="offers__item-info-icon" />
                    Airplane Bill Included
                  </p>
                  <p>
                    <FaBuilding className="offers__item-info-icon" />
                    Daily Places Visit
                  </p>
                </div>

                <button className="offers__item-btn">Make a reservation</button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Offers;
