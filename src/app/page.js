import "./Landingpage.scss";
import Logo from "../assets/logo/Spicynuggs-Logo.svg";
import HeroImage from "../../public/assets/HeroStickerImage.png";
import HeroStickers from "../../public/assets/stickers/Hero-Stickers.svg";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="landing-page">
      <section className="landing-page__hero">
        <div className="landing-page__hero-left-container">
          <Image
            className="landing-page__hero-logo"
            src={Logo}
            alt="Hero logo"
          />
          <div className="landing-page__hero-stickers-container">
            <Image
              className="landing-page__hero-stickers"
              src={HeroStickers}
              alt="Hero Stickers"
            />
          </div>
          <div className="landing-page__hero-text-container">
            <h1 className="landing-page__hero-title">
              Browse Our Latest Products Now!
            </h1>
            <Link href="/shop" className="landing-page__hero-button">
              SHOP NOW
            </Link>
          </div>
        </div>
        <Image
          className="landing-page__hero-image"
          src={HeroImage}
          alt="Holding a Halloween Sticker"
        />
      </section>
    </main>
  );
}
