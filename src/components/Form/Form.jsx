import "./Form.scss";

// Icons
import { IoCall, IoMail } from "react-icons/io5";
import { FaLocationPin } from "react-icons/fa6";

import { useRef } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Form() {
  const form = useRef();
  const formName = useRef();
  const formPhone = useRef();
  const formGuests = useRef();
  const formDate = useRef();
  const formDestination = useRef();
  const formVisa = useRef();
  const { t } = useTranslation();

  const token = "7313239532:AAGMnRs1n3-z-hVkDPTdGb8cG9pNxL7YzcI";
  const chat_id = 714012440;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const postData = async (e) => {
    e.preventDefault();

    const data = {
      name: formName.current.value,
      phone: formPhone.current.value,
      guests: formGuests.current.value,
      date: formDate.current.value,
      destination: formDestination.current.value,
      visa: formVisa.current.value,
    };

    form.current.reset();

    const { name, phone, guests, date, destination, visa } = data;

    const postRequest = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id,
        text: `Name: ${name} \nPhone number: ${phone} \nNumber of Guests: ${guests} \nDate: ${date} \nDestination: ${destination} \nVisa Support: ${visa}`,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} Something went wrong!`);
      }
      return response;
    });

    toast.promise(postRequest, {
      pending: "Sending data...",
      success: "Your data is sent successfully!",
      error: {
        render({ data }) {
          return `Error: ${data.message}`;
        },
      },
    });
  };

  return (
    <section className="form" id="form">
      <div className="container">
        <div className="form__cards">
          <div className="form__card">
            <span className="form__card-icon">
              <IoCall />
            </span>
            <h3 className="form__card-title">{t("form.telTitle")}</h3>
            <a className="form__card-link" href="tel:+998992999996">
              +998 99 299 99 96
            </a>
          </div>
          <div className="form__card">
            <span className="form__card-icon">
              <IoMail />
            </span>
            <h3 className="form__card-title">{t("form.mailTitle")}</h3>
            <a
              className="form__card-link"
              href="mailto:zamonbiznestour@mail.ru"
            >
              zamonbiznestour@mail.ru
            </a>
          </div>
          <div className="form__card">
            <span className="form__card-icon">
              <FaLocationPin />
            </span>
            <h3 className="form__card-title">{t("form.locationTitle")}</h3>
            <p className="form__card-text">{t("form.locationText")}</p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.5342977415352!2d69.28219406195052!3d41.33762317356133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b52154ebd3f%3A0x1b75d2ab6395d2e5!2sInternational%20Hotel%20Tashkent%2C%20Amir%20Temur%20Avenue%20107A%2C%20100084%2C%20Tashkent%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1721196018990!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="form__map"
        ></iframe>

        <form className="form__content" ref={form} onSubmit={postData}>
          <h2 className="form__content-title">
            {t("form.formTitle1")} <span>{t("form.formTitle2")}</span>{" "}
            {t("form.formTitle3")} <span>{t("form.formTitle4")}</span>
          </h2>

          <div className="form__content-row">
            <label>
              <span>{t("form.label1")}</span>
              <input
                ref={formName}
                type="text"
                placeholder={t("form.placeholder1")}
                required
                name="name"
              />
            </label>

            <label>
              <span>{t("form.label2")}</span>
              <input
                ref={formPhone}
                type="tel"
                placeholder={t("form.placeholder2")}
                required
                name="tel"
              />
            </label>
          </div>

          <div className="form__content-row">
            <label>
              <span>{t("form.label3")}</span>
              <select ref={formGuests} name="guests" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </label>

            <label>
              <span>{t("form.label4")}</span>
              <input ref={formDate} type="date" name="date" required />
            </label>
          </div>

          <label>
            <span>{t("form.label5")}</span>
            <select ref={formDestination} name="destination" required>
              <option value={t("form.city1")}>{t("form.city1")}</option>
              <option value={t("form.city2")}>{t("form.city2")}</option>
              <option value={t("form.city3")}>{t("form.city3")}</option>
              <option value={t("form.city4")}>{t("form.city4")}</option>
              <option value={t("form.city5")}>{t("form.city5")}</option>
              <option value={t("form.city6")}>{t("form.city6")}</option>
              <option value={t("form.city7")}>{t("form.city7")}</option>
            </select>
          </label>

          <label>
            <span>{t("form.label6")}</span>
            <select ref={formVisa} name="visa" required>
              <option value={t("form.country1")}>{t("form.country1")}</option>
              <option value={t("form.country2")}>{t("form.country2")}</option>
              <option value={t("form.country3")}>{t("form.country3")}</option>
              <option value={t("form.country4")}>{t("form.country4")}</option>
              <option value={t("form.country5")}>{t("form.country5")}</option>
              <option value={t("form.country6")}>{t("form.country6")}</option>
              <option value={t("form.country7")}>{t("form.country7")}</option>
              <option value={t("form.country8")}>{t("form.country8")}</option>
              <option value={t("form.country9")}>{t("form.country9")}</option>
            </select>
          </label>

          <button className="form__content-btn">{t("form.btn")}</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
