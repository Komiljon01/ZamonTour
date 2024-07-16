import "./Locations.scss";

import { locationsData } from "../../data";
import { RiFullscreenLine } from "react-icons/ri";
import { useState } from "react";

function Locations() {
  const [data, setData] = useState(locationsData);

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
        <h2 className="locations__title">Best Locations</h2>
        <p className="locations__text">
          Discover the best offers in each city, curated just for you. Immerse
          yourself in a world of savings and indulge in unparalleled
          experiences.
        </p>

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
                <p>Population: {panel.population}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;
