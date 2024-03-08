import "./GoogleButton.scss";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import Image from "next/image";

export default function GoogleButton() {
  return (
    <button className="google-button">
      <Image src={GoogleIcon} className="google-button__image" />
      <p className="google-button__text">Sign in with Google</p>
    </button>
  );
}
