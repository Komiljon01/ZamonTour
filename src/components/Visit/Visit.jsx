import "./Visit.scss";

// Visit Icons
import { IoPerson } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";

// Visit Images
import dubaiVisit from "../../assets/images/visit-dubai.jpg";
import antalyaVisit from "../../assets/images/visit-antalya.jpg";
import istanbulVisit from "../../assets/images/visit-istanbul.jpg";
import sharmVisit from "../../assets/images/visit-sharm.jpg";
import { useTranslation } from "react-i18next";

function Visit() {
  const { t } = useTranslation();
  
  // Data
  const visitData = [
    {
      id: 24,
      title: t("visit.city1"),
      country: t("visit.country1"),
      info: t("visit.subtitle1"),
      people: t("visit.people1"),
      territory: "41.290 km",
      price: " $1.100.200",
      image: dubaiVisit,
    },
    {
      id: 25,
      title: t("visit.city2"),
      country: t("visit.country2"),
      info: t("visit.subtitle2"),
      people: t("visit.people2"),
      territory: "275.400 km",
      price: " $946.000",
      image: antalyaVisit,
    },
    {
      id: 26,
      title: t("visit.city3"),
      country: t("visit.country3"),
      info: t("visit.subtitle3"),
      people: t("visit.people3"),
      territory: "551.500 km",
      price: " $425.600",
      image: sharmVisit,
    },
    {
      id: 27,
      title: t("visit.city4"),
      country: t("visit.country4"),
      info: t("visit.subtitle4"),
      people: t("visit.people4"),
      territory: "551.500 km",
      price: " $425.600",
      image: istanbulVisit,
    },
  ];
  return (
    <section className="visit">
      <div className="container">
        <h2 className="visit__title">{t("visit.title")}</h2>
        <p className="visit__text">{t("visit.text")}</p>

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
                    <a href="#contacts" className="visit__card-btn">
                      {t("exploreBtn")}
                    </a>
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

                  <a href="#contacts" className="need__directions-link">
                    {t("visit.needDirection")}{" "}
                    <GrLinkNext className="need__directions-link_icon" />
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
