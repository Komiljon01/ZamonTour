import { heroSliderData } from "../../data";
import "./HeroSlider.scss";
import { FaUserAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

function HeroSlider({ location, population, territory, avgPrice, image }) {
  return (
    <>
      <div className="hero__slider-content">
        <h2 className="hero__slider-title">
          Take a Glimpse Into The Beautiful City Of:
        </h2>
        <h1 className="hero__slider-location">{location}</h1>
        <button className="hero__slider-content-btn">Go There</button>

        <div className="hero__slider-info">
          <div className="hero__slider-population">
            <span className="hero__slider-circle">
              <FaUserAlt />
            </span>
            <div className="hero__slider-population_content">
              <p>Population:</p>
              <h4>{population}</h4>
            </div>
          </div>

          <div className="hero__slider-territory">
            <span className="hero__slider-circle">
              <FaGlobe />
            </span>
            <div className="hero__slider-territory_content">
              <p>Territory:</p>
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
              <p>AVG Price:</p>
              <h4>{avgPrice}</h4>
            </div>
          </div>

          <button className="hero__slider-info_btn">Explore More</button>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
