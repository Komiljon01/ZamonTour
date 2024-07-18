import { useTranslation } from "react-i18next";
import "./Footer.scss";

function Footer() {
  const { t } = useTranslation();
  return (
    <section className="footer">
      <div className="footer__content">
        <div className="container">
          <div className="footer__content-info">
            <h2>{t("footer.title")}</h2>
            <p>{t("footer.text")}</p>
          </div>
          <a className="footer__content-btn" href="#">
            {t("footer.btn")}
          </a>
        </div>
      </div>

      <div className="footer__copyrights">
        <div className="container">
          <p>
            {t("footer.copyrightsText1")}&nbsp;
            <a href="#">{t("footer.copyrightsText2")}</a>
            &nbsp;{t("footer.copyrightsText3")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
