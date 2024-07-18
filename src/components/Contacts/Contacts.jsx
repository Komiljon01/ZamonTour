import { useTranslation } from "react-i18next";
import "./Contacts.scss";

function Contacts() {
  const { t } = useTranslation();
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <p className="contacts__intro">{t("contacts.intro")}</p>
        <span className="contacts__divider"></span>
        <h2 className="contacts__title">{t("contacts.title")}</h2>
        <a href="#form" className="contacts__btn">
          {t("contacts.btn")}
        </a>
      </div>
    </section>
  );
}

export default Contacts;
