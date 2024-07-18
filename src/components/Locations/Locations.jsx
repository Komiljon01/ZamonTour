import "./Locations.scss";

import { RiFullscreenLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Locations Images
import dubaiPanel from "../../assets/images/panel-dubai.jpg";
import antalyaPanel from "../../assets/images/panel-antalya.jpg";
import istanbulPanel from "../../assets/images/panel-istanbul.jpg";
import parisPanel from "../../assets/images/panel-paris.jpg";
import sharmPanel from "../../assets/images/panel-sharm.jpg";

function Locations() {
  const { t } = useTranslation();

  // Data
  const locationsData = [
    {
      id: 28,
      title: t("locations.city1"),
      population: t("locations.population1"),
      image: dubaiPanel,
      active: true,
    },
    {
      id: 29,
      title: t("locations.city2"),
      population: t("locations.population2"),
      image: antalyaPanel,
      active: false,
    },
    {
      id: 30,
      title: t("locations.city3"),
      population: t("locations.population3"),
      image: istanbulPanel,
      active: false,
    },
    {
      id: 31,
      title: t("locations.city4"),
      population: t("locations.population4"),
      image: sharmPanel,
      active: false,
    },
    {
      id: 32,
      title: t("locations.city5"),
      population: t("locations.population5"),
      image: parisPanel,
      active: false,
    },
  ];

  const [data, setData] = useState(locationsData);

  useEffect(() => {
    const translatedData = locationsData.map((panel) => ({
      ...panel,
      title: t(panel.title),
      population: t(panel.population),
    }));
    setData(translatedData);
  }, [t]);

  const onActiveTab = (id) => {
    const updatedData = data.map((panel) =>
      panel.id === id ? { ...panel, active: true } : { ...panel, active: false }
    );
    setData(updatedData);
  };

  const getID = (id) => {
    onActiveTab(id);
  };

  return (
    <section className="locations">
      <div className="container">
        <h2 className="locations__title">{t("locations.title")}</h2>
        <p className="locations__text">{t("locations.text")}</p>

        <div className="locations__tabs">
          {data.map((panel) => (
            <div
              className={`location__tabs-panel ${panel.active ? "active" : ""}`}
              onClick={() => getID(panel.id)}
              key={panel.id}
              style={{
                backgroundImage: `url(${panel.image})`,
              }}
            >
              <span className="location__tabs-panel-icon">
                <RiFullscreenLine />
              </span>

              <div className="location__tabs-panel-content">
                <h3>{panel.title}</h3>
                <p>{panel.population}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;
