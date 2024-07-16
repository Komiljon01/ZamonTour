import "./Visa-support.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { visaSliderData } from "../../data";

function VisaSupport() {
  return (
    <section className="visa">
      <h2 className="visa__title">Visa Support</h2>
      <p className="visa__text">
        Experience stress-free travel with our expert visa support. We provide
        seamless assistance and comprehensive guidance, ensuring a smooth
        journey.
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
        className="visa__slider"
      >
        {visaSliderData &&
          visaSliderData.map((offer) => (
            <SwiperSlide key={offer.id} className="visa__slider-item">
              <img
                className="visa__slider-item_img"
                src={offer.image}
                alt={offer.title}
              />
              <div className="visa__slider-content">
                <div className="visa__slider-intro">
                  <h3 className="visa__item-title">{offer.title}</h3>
                </div>
                <div className="visa__item-numbers">
                  <p>
                    <FaUsers className="visa__item-numbers-icon" />
                    <span>{offer.people} Check Ins</span>
                  </p>
                </div>

                <span className="visa__item-divider"></span>

                <div className="visa__item-info">
                  <h4>Benefits of our Visa Support service:</h4>
                  <p>
                    <IoIosPricetags className="visa__item-info-icon" />
                    <span>Best prices</span>
                  </p>
                  <p>
                    <FaClock className="visa__item-info-icon" />
                    Short Processing Time
                  </p>
                  <p>
                    <FaCheck className="visa__item-info-icon" />
                    Trustworthy Assistance
                  </p>
                </div>

                <button className="visa__item-btn">Make a reservation</button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default VisaSupport;
