import "./Hero.scss";

// Hero Images
import istanbul from "../../assets/images/istanbul-slider.jpg";
import antalya from "../../assets/images/antalya-slider.jpg";
import dubai from "../../assets/images/dubai-slider.jpg";
import sharm from "../../assets/images/sharm-slider.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import HeroSlider from "./HeroSlider";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  // Data
  const heroSliderData = [
    {
      id: 1,
      location: t("hero.location1"),
      population: "44.48 M",
      territory: "275.400 KM",
      avgPrice: "$946.000",
      image: istanbul,
    },
    {
      id: 2,
      location: t("hero.location2"),
      population: "8.66 M",
      territory: "41.290 KM",
      avgPrice: "$1.100.200",
      image: antalya,
    },
    {
      id: 3,
      location: t("hero.location3"),
      population: "67.41 M",
      territory: "275.400 KM",
      avgPrice: "$425.600",
      image: dubai,
    },
    {
      id: 4,
      location: t("hero.location4"),
      population: "69.86 M",
      territory: "513.120 KM",
      avgPrice: "165.450",
      image: sharm,
    },
  ];

  return (
    <section id="hero">
      <Swiper
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="hero__slider"
      >
        {heroSliderData &&
          heroSliderData.map((data) => (
            <SwiperSlide
              key={data.id}
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backgroundBlendMode: "multiply",
              }}
            >
              <HeroSlider
                location={data.location}
                population={data.population}
                territory={data.territory}
                avgPrice={data.avgPrice}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Hero;
