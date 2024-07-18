import "./Visa-support.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Visa Icons
import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

// Visa Images
import visa1 from "../../assets/images/visa-1.jpg";
import visa2 from "../../assets/images/visa-2.jpg";
import visa3 from "../../assets/images/visa-3.jpeg";
import visa4 from "../../assets/images/visa-4.jpg";
import visa5 from "../../assets/images/visa-5.jpg";
import visa6 from "../../assets/images/visa-6.jpg";
import visa7 from "../../assets/images/visa-7.jpg";
import visa8 from "../../assets/images/visa-8.jpg";
import visa9 from "../../assets/images/visa-9.jpg";
import { useTranslation } from "react-i18next";

function VisaSupport() {
  const { t } = useTranslation();

  // Data
  const visaSliderData = [
    {
      id: 14,
      title: t("visa.country1"),
      people: 500,
      image: visa1,
    },
    {
      id: 15,
      title: t("visa.country2"),
      people: 200,
      image: visa2,
    },
    {
      id: 16,
      title: t("visa.country3"),
      people: 400,
      image: visa3,
    },
    {
      id: 17,
      title: t("visa.country4"),
      people: 234,
      image: visa4,
    },
    {
      id: 18,
      title: t("visa.country5"),
      people: 345,
      image: visa5,
    },
    {
      id: 19,
      title: t("visa.country6"),
      people: 445,
      image: visa6,
    },
    {
      id: 20,
      title: t("visa.country7"),
      people: 245,
      image: visa7,
    },
    {
      id: 21,
      title: t("visa.country8"),
      people: 645,
      image: visa8,
    },
    {
      id: 22,
      title: t("visa.country9"),
      people: 345,
      image: visa9,
    },
  ];
  return (
    <section className="visa">
      <h2 className="visa__title">{t("visa.title")}</h2>
      <p className="visa__text">{t("visa.text")}</p>

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
                    <span>
                      {offer.people} {t("visa.checkIn")}
                    </span>
                  </p>
                </div>

                <span className="visa__item-divider"></span>

                <div className="visa__item-info">
                  <h4>{t("visa.benefits")}</h4>
                  <p>
                    <IoIosPricetags className="visa__item-info-icon" />
                    <span>{t("visa.bestPrices")}</span>
                  </p>
                  <p>
                    <FaClock className="visa__item-info-icon" />
                    {t("visa.time")}
                  </p>
                  <p>
                    <FaCheck className="visa__item-info-icon" />
                    {t("visa.trust")}
                  </p>
                </div>

                <a href="#contacts" className="visa__item-btn">
                  {t("reservationBtn")}
                </a>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default VisaSupport;
