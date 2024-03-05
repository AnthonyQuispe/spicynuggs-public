"use client";
import "./Landingpage.scss";
import Logo from "../assets/logo/Spicynuggs-Logo.svg";
import HeroImage from "../../public/assets/HeroStickerImage.png";
import HeroStickers from "../../public/assets/stickers/Hero-Stickers.svg";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Sample card data (you might have an array of cards in actual use)
  const cards = [
    { text: "Nugget Skelly Sticker 1", price: "$10.00" },
    { text: "Nugget Skelly Sticker 2", price: "$15.00" },
    { text: "Nugget Skelly Sticker 3", price: "$20.00" },
  ];

  const handleDotClick = (index) => {
    setActiveCardIndex(index);
  };

  useEffect(() => {
    // Listen for scroll events
    const handleScroll = () => {
      // Calculate the current scroll position
      const scrollPosition = window.scrollX;

      // Calculate the index of the card based on the scroll position
      const newIndex = Math.floor(scrollPosition / window.innerWidth);

      // Update the active card index
      setActiveCardIndex(newIndex);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <section className="whats-new">
        <h2 className="whats-new__title">What's New</h2>
        <div className="whats-new__cards">
          <div
            className={`whats-new__card ${
              activeCardIndex === activeCardIndex ? "active" : ""
            }`}
          >
            <div className="whats-new__card-image-container">
              <img
                src={"/assets/CardPlaceHolderDesktop.png"}
                alt="Card"
                className="whats-new__card-image"
              />
            </div>
            <div className="whats-new__card-bottom">
              <p className="whats-new__card-text">
                {cards[activeCardIndex].text}
              </p>
              <p className="whats-new__card-price">
                {cards[activeCardIndex].price}
              </p>
              <button className="whats-new__card-button">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="whats-new__dots">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`whats-new__dots-button ${
                index === activeCardIndex
                  ? "whats-new__dots-button--active"
                  : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
