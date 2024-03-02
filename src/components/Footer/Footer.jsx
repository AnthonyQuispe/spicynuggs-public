import "./Footer.scss";
import Image from "next/image";
import Logo from "../../assets/logo/Spicynuggs-Logo-White.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo-container">
        <Link href="/">
          <Image src={Logo} alt="Spicy Nuggs Logo" className="footer__logo" />
        </Link>
        <p className="footer__list-copyright footer__list-copyright--alt">
          © 2024 SpicyNuggs All Rights Reserved
        </p>
      </div>
      <ul className="footer__list-container">
        <li>
          <h2 className="footer__list-title">More Info </h2>
        </li>
        <li>
          <Link className="footer__list-links" href="/info">
            FAQs
          </Link>
        </li>
        <li className="footer__list-links">
          <Link href="/info"> Shipping</Link>
        </li>
        <li className="footer__list-links">
          <Link href="/info">Terms of Service </Link>
        </li>
        <li className="footer__list-links">
          <Link href="/contact-us">Contact Us </Link>
        </li>
      </ul>
      <ul className="footer__list-container">
        <li className="footer__list-title">Socials</li>
        <a href="https://www.instagram.com/spicynuggsx/">
          <p className="footer__list-links">Instagram</p>
        </a>
        <a href="https://www.youtube.com/@spicynuggsx">
          <p className="footer__list-links">Youtube</p>
        </a>
        <a href="https://www.tiktok.com/@spicynuggsx">
          <p className="footer__list-links">TikTok</p>
        </a>
        <a href="https://www.twitch.tv/spicynuggsx">
          <p className="footer__list-links">Twitch</p>
        </a>
      </ul>
      <p className="footer__list-copyright">
        © 2024 SpicyNuggs All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
