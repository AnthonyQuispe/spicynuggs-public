"use client";
import "./Landingpage.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../assets/logo/Spicynuggs-Logo.svg";
import HeroImage from "../../public/assets/HeroStickerImage.png";
import HeroStickers from "../../public/assets/stickers/Hero-Stickers.svg";
import SentIcon from "../assets/SentIcon.svg";

import Sticker1 from "../assets/stickers/Sticker1.svg";
import Sticker2 from "../assets/stickers/Sticker2.svg";
import Sticker3 from "../assets/stickers/Sticker3.svg";
import Footage from "../assets/Footage.svg";

export default function Home() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const NewsLetterCollectionRef = collection(db, "NewsLetterSubscribers");

      // Check if the email already exists in the collection
      const querySnapshot = await getDocs(
        query(NewsLetterCollectionRef, where("email", "==", email))
      );

      if (querySnapshot.size > 0) {
        // Email already exists, handle accordingly (e.g., display an error message)
        console.error("Email already exists in the collection");
        window.alert("Email already subscribed");
      } else {
        // Email does not exist, add a new document
        await addDoc(NewsLetterCollectionRef, {
          email: email,
          timestamp: serverTimestamp(),
        });

        setSubscribed(true);
      }
    } catch (error) {
      console.error("Error submitting email to Firestore:", error);
      window.alert("Unable to subscribe to NewsLetter");
    }
  };

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
      <section className="subscription">
        <div className="subscription__container">
          <h2 className="subscription__container-title">Want Monthly Gifts?</h2>
          <p className="subscription__container-text">
            Join my patreon and get access to monthly exclusive gifts such as
            stickers, digital downloads, and prints
          </p>
          <button className="subscription__container-button">Join Now</button>
        </div>
      </section>
      <section className="about">
        <div className="about__header">
          <h2 className="about__title">About US</h2>
          <h2 className="about__title about__title--alt">
            A little about our Products
          </h2>
          <img
            src={"/assets/PumpkinImg.png"}
            className="about__image"
            alt="PumpkinImg"
          />
        </div>
        <div className="about__containers">
          <div className="about__container">
            <h3 className="about__subheader">
              Support a local small business{" "}
            </h3>
            <p className="about__text">
              All our products are produced in South Florida{" "}
            </p>
          </div>
          <div className="about__container">
            <h3 className="about__subheader">Team of One, Created by hand</h3>
            <p className="about__text">
              Every sticker in our collection is meticulously created by hand,
              ensuring the utmost attention to detail and quality.
            </p>
          </div>
          <div className="about__container">
            <h3 className="about__subheader">Eco friendly packaging</h3>
            <p className="about__text">
              Our stickers are produced with sustainability in mind, using
              earth-friendly materials.
            </p>
          </div>
        </div>
      </section>

      <section className="news-letter">
        <h2 className="news-letter__title">
          {subscribed ? "Subscribed To newsletter" : "JOIN OUR NEWSLETTER"}
        </h2>
        <p className="news-letter__text">
          {subscribed
            ? "Successfully !"
            : "Sign up to stay updated with shop updates, discounts, new products and, more !"}
        </p>
        {!subscribed && (
          <form className="news-letter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="news-letter__form-input"
              placeholder="Email Address"
              required
            />
            <button type="submit" className="news-letter__form-button">
              <Image
                className="news-letter__form-image"
                src={SentIcon}
                alt="send icon"
              />
            </button>
          </form>
        )}
      </section>
      <section className="social-section">
        <div className="social-section__containers social-section__containers--alt">
          <h2 className="social-section__subheader">
            Want Some Exclusive Footage of The Process Behind SpicyNuggs
          </h2>
          <iframe
            className="social-section__image social-section__image--alt "
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Pern2Za3LuE?si=djDfqgeJ7x6LQKhW"
            title="YouTube video player"
            poster={Footage}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="social-section__containers">
          <h2 className="social-section__title">We're on instagram</h2>
          <div className="social-section__containers--images">
            <Link
              href="https://www.instagram.com/spicynuggsx/"
              className="social-section__link"
            >
              <Image
                className="social-section__image"
                src={Sticker1}
                alt="Social Sticker"
              />
            </Link>
            <Link
              href="https://www.instagram.com/spicynuggsx/"
              className="social-section__link"
            >
              <Image
                className="social-section__image"
                src={Sticker2}
                alt="Social Sticker"
              />
            </Link>
            <Link
              href="https://www.instagram.com/spicynuggsx/"
              className="social-section__link"
            >
              <Image
                className="social-section__image"
                src={Sticker3}
                alt="Social Sticker"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
