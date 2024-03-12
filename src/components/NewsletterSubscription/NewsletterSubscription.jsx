"use client";

import "./NewsletterSubscription.scss";
import Image from "next/image";
import SentIcon from "../../assets/SentIcon.svg";
import { useState } from "react";

function NewsletterSubscription() {
  return (
    <form className="subscription-button">
      <input
        placeholder="Email Address"
        required
        className="subscription-button__input"
      />
      <button className="subscription-button__button">
        <Image
          src={SentIcon}
          alt="send button"
          className="subscription-button__button-img"
        />
      </button>
    </form>
  );
}

export default NewsletterSubscription;
