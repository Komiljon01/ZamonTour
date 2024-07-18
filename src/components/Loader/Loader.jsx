import "./Loader.scss";

function Loader({ contentVisible }) {
  return (
    <section id="loader" className={contentVisible ? "loaded" : ""}>
      <div className="loader">
        <div className="loader__item"></div>
        <div className="loader__item"></div>
        <div className="loader__item"></div>
        <div className="loader__item"></div>
      </div>
    </section>
  );
}

export default Loader;
