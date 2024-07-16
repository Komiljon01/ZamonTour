import { destinationsData } from "../../data";
import "./Destinations.scss";

function Destinations() {
  return (
    <section className="destinations">
      <div className="container">
        <h2 className="destinations__title">Explore Destinations With Ease</h2>
        <p className="destinations__text">
          Find the best deals on railway and airplane tickets in each city,
          carefully selected for you.
        </p>

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
                      Explore More
                    </button>
                  </div>

                  <p className="destination__card-text">
                    Embark on a railway adventure and explore destinations
                    worldwide. Whether it&#39;s the picturesque landscapes,
                    bustling cities, or cultural gems, our rail services offer a
                    unique and comfortable way to traverse the globe. Immerse
                    yourself in the beauty of different cultures, all accessible
                    through our extensive railway network. .
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
