import { visitData } from "../../data";
import "./Visit.scss";

import { IoPerson } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";

function Visit() {
  return (
    <section className="visit">
      <div className="container">
        <h2 className="visit__title">Visit One Of Our Countries Now</h2>
        <p className="visit__text">
          Discover the best offers in each city, curated just for you. Immerse
          yourself in a world of savings and indulge in unparalleled
          experiences.
        </p>

        <div className="visit__cards">
          {visitData &&
            visitData.map((visit) => (
              <div className="visit__card" key={visit.id}>
                <img
                  className="visit__card-img"
                  src={visit.image}
                  alt={visit.title}
                />

                <div className="visit__card-content">
                  <div className="visit__card-intro">
                    <div className="visit__card-intro_text">
                      <h3 className="visit__card-title">{visit.title}</h3>
                      <p>{visit.country}</p>
                    </div>
                    <button className="visit__card-btn">Explore More</button>
                  </div>

                  <p className="visit__card-text">{visit.info}</p>

                  <div className="visit__card-numbers">
                    <div className="visit__card-people">
                      <IoPerson />
                      <p>{visit.people}</p>
                    </div>
                    <div className="visit__card-territory">
                      <FaGlobe />
                      <p>{visit.territory}</p>
                    </div>
                    <div className="visit__card-price">
                      <GoHomeFill />
                      <p>{visit.price}</p>
                    </div>
                  </div>

                  <a href="#" className="need__directions-link">
                    Need Directions? <GrLinkNext className="need__directions-link_icon" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Visit;
