import "./HeroSlider.scss";
import { useTranslation } from "react-i18next";

// Icons
import { FaUserAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

function HeroSlider({ location, population, territory, avgPrice }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="hero__slider-content">
        <h2 className="hero__slider-title">{t("hero.title")}</h2>
        <h1 className="hero__slider-location">{location}</h1>
        <a href="#contacts" className="hero__slider-content-btn">{t("hero.btn")}</a>

        <div className="hero__slider-info">
          <div className="hero__slider-population">
            <span className="hero__slider-circle">
              <FaUserAlt />
            </span>
            <div className="hero__slider-population_content">
              <p>{t("hero.population")}</p>
              <h4>{population}</h4>
            </div>
          </div>

          <div className="hero__slider-territory">
            <span className="hero__slider-circle">
              <FaGlobe />
            </span>
            <div className="hero__slider-territory_content">
              <p>{t("hero.territory")}</p>
              <h4>
                {territory}
                <sup>2</sup>
              </h4>
            </div>
          </div>

          <div className="hero__slider-avgPrice">
            <span className="hero__slider-circle">
              <TiHome />
            </span>
            <div className="hero__slider-avgPrice_content">
              <p>{t("hero.avgPrice")}</p>
              <h4>{avgPrice}</h4>
            </div>
          </div>

          <a href="#contacts" className="hero__slider-info_btn">{t("exploreBtn")}</a>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;

/* 
  &::after {
      position: absolute;
      top: 30px;
      color: #fff;
      font-size: 20px;
      transform: translate(-50%, -50%);
      opacity: 1;
    }

    &:nth-child(1)::after {
      content: "1";
    }
    &:nth-child(2)::after {
      content: "2";
    }
    &:nth-child(3)::after {
      content: "3";
    }
    &:nth-child(4)::after {
      content: "4";
    }
*/