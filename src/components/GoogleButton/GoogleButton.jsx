"use client";
import "./GoogleButton.scss";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import Image from "next/image";

export default function GoogleButton({ buttonText }) {
  return (
    <button className="google-button">
      <Image src={GoogleIcon} className="google-button__image" />
      <p className="google-button__text">{buttonText}</p>
    </button>
  );
}
