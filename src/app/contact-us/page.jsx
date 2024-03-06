"use client";

import Sticker from "../../../public/assets/PumpkinImg.png";
import { useState, useEffect } from "react";
import "./contact.scss";

function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const { firstName, lastName, email, subject, message } = formState;

  const isFormFilled =
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    subject !== "" &&
    message !== "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__header">
          <div className="contact__header-top">
            <h1 className="contact__title">Contact Us</h1>
            <p className="contact__description">
              If you prefer not to use the contact form you can also email me at
              nuggs.info@gmail.com
            </p>
          </div>
          <div className="contact__header-bottom">
            <img
              src={"/assets/PumpkinImg.png"}
              className="contact__img"
              alt="Pumpkin Sticker"
            />
          </div>
        </div>
        <form className="contact__form">
          <div className="contact__name-inputs">
            <input
              placeholder="First Name"
              className="contact__input contact__input--firstName"
              value={firstName}
              onChange={handleInputChange}
              name="firstName"
            />
            <input
              placeholder="Last Name"
              className="contact__input contact__input--lastName"
              value={lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>
          <input
            placeholder="Email"
            className="contact__input contact__input--email"
            value={email}
            onChange={handleInputChange}
            name="email"
          />
          <input
            placeholder="Subject"
            className="contact__input contact__input--subject"
            value={subject}
            onChange={handleInputChange}
            name="subject"
          />
          <textarea
            placeholder="Message"
            className="contact__textarea contact__input--message"
            value={message}
            onChange={handleInputChange}
            name="message"
          />
          <div className="contact__button-container">
            <button
              onClick={submit}
              disabled={!isFormFilled}
              className="contact__button"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="contact__bottom-container">
          <img
            src={"/assets/PumpkinImg.png"}
            className="contact__img contact__img--alt"
          />
          <p className="contact__description contact__description--alt">
            If you prefer not to use the contact form you can also email me at
            nuggs.info@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
