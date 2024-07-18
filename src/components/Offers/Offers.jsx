import "./Offers.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Offers Icons
import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";

// Offers Images
import offer1 from "../../assets/images/offer-1.jpg";
import offer2 from "../../assets/images/offer-2.jpg";
import offer3 from "../../assets/images/offer-3.jpg";
import offer4 from "../../assets/images/offer-4.jpg";
import offer5 from "../../assets/images/offer-5.jpg";
import offer6 from "../../assets/images/offer-6.jpg";
import offer7 from "../../assets/images/offer-7.jpg";
import offer8 from "../../assets/images/offer-8.jpg";
import { useTranslation } from "react-i18next";

function Offers() {
  const { t } = useTranslation();

  // Data
  const offersSliderData = [
    {
      id: 5,
      title: t("offers.country1"),
      price: "$999",
      people: 500,
      image: offer1,
    },
    {
      id: 6,
      title: t("offers.country2"),
      price: "$800",
      people: 200,
      image: offer2,
    },
    {
      id: 7,
      title: t("offers.country3"),
      price: "$800",
      people: 400,
      image: offer3,
    },
    {
      id: 8,
      title: t("offers.country4"),
      price: "$890",
      people: 234,
      image: offer4,
    },
    {
      id: 9,
      title: t("offers.country5"),
      price: "$700",
      people: 345,
      image: offer5,
    },
    {
      id: 10,
      title: t("offers.country6"),
      price: "$790",
      people: 445,
      image: offer6,
    },
    {
      id: 11,
      title: t("offers.country7"),
      price: "$490",
      people: 245,
      image: offer7,
    },
    {
      id: 12,
      title: t("offers.country8"),
      price: "$879",
      people: 645,
      image: offer8,
    },
    {
      id: 13,
      title: t("offers.country9"),
      price: "$785",
      people: 345,
      image: offer3,
    },
  ];
  return (
    <section className="offers">
      <h2 className="offers__title">{t("offers.title")}</h2>
      <p className="offers__text">{t("offers.text")}</p>

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
                    <span>
                      {offer.people} {t("offers.checkIn")}
                    </span>
                  </p>
                  <span>/{t("offers.person")}</span>
                </div>

                <span className="offers__item-divider"></span>

                <div className="offers__item-info">
                  <h4>{t("offers.includes")}</h4>
                  <p>
                    <FaCar className="offers__item-info-icon" />
                    {t("offers.trip")} &gt; {t("offers.hotel")}
                  </p>
                  <p>
                    <IoAirplane className="offers__item-info-icon" />
                    {t("offers.bill")}
                  </p>
                  <p>
                    <FaBuilding className="offers__item-info-icon" />
                    {t("offers.visit")}
                  </p>
                </div>

                <button className="offers__item-btn">
                  {t("reservationBtn")}
                </button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Offers;
