import "./Hero.scss";

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
import { heroSliderData } from "../../data";

function Hero() {
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
