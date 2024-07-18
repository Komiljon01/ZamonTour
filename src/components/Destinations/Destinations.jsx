import "./Destinations.scss";

// Destinations Images
import train from "../../assets/images/train.jpg";
import airplane from "../../assets/images/airplane.jpg";
import { useTranslation } from "react-i18next";

function Destinations() {
  const { t } = useTranslation();

  // Data
  const destinationsData = [
    {
      id: 23,
      title: t("destinations.destinationTitle1"),
      text: t("destinations.destinationSubtitle1"),
      image: train,
    },
    {
      id: 24,
      title: t("destinations.destinationTitle2"),
      text: t("destinations.destinationSubtitle2"),
      image: airplane,
    },
  ];
  return (
    <section className="destinations">
      <div className="container">
        <h2 className="destinations__title">{t("destinations.title")}</h2>
        <p className="destinations__text">{t("destinations.text")}</p>

        <div className="destinations__cards">
          {destinationsData &&
            destinationsData.map((destination) => (
              <div className="destination__card" key={destination.id}>
                <img
                  className="destionation__card-img"
                  src={destination.image}
                  alt={destination.title}
                />

                <div className="destination__card-content">
                  <div className="destination__card-intro">
                    <div className="destination__card-intro_text">
                      <h3 className="destination__card-title">
                        {destination.title}
                      </h3>
                      <p>{destination.text}</p>
                    </div>
                    <button className="destination__card-btn">
                      {t("exploreBtn")}
                    </button>
                  </div>

                  <p className="destination__card-text">
                    {t("destinations.destinationText")}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
