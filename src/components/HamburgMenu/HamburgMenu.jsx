"use client";

import "./HamburgMenu.scss";
import Logo from "../../assets/logo/Spicynuggs-Logo.svg";
import Image from "next/image";
import Link from "next/link";
import CloseButton from "../../assets/CloseIcon.svg";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import TwitchIcon from "../../assets/TwitchIcon.svg";
import YoutubeIcon from "../../assets/YoutubeIcon.svg";
import TikTokIcon from "../../assets/TikTokIcon.svg";

import { useState } from "react";

function HamburgerMenu({ setHamburgerMenuComponent }) {
  const closeMenu = () => {
    setHamburgerMenuComponent(false);
  };

  return (
    <div className="hamburger">
      <div className="hamburger-menu">
        <button className="hamburger-menu__button" onClick={closeMenu}>
          <Image src={CloseButton} alt="Closing Icon Button" />
        </button>
        <Image src={Logo} alt="Logo" className="hamburger-menu__logo" />
        <ul className="hamburger-menu__list">
          <li className="hamburger-menu__item">
            <Link href="/" className="hamburger-menu__link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="hamburger-menu__item">
            <Link
              href="/shop"
              className="hamburger-menu__link"
              onClick={closeMenu}
            >
              Shop
            </Link>
          </li>
          <li className="hamburger-menu__item">
            <Link
              href="/info"
              className="hamburger-menu__link"
              onClick={closeMenu}
            >
              Info
            </Link>
          </li>
          <li className="hamburger-menu__item">
            <Link
              href="/about"
              className="hamburger-menu__link"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
        </ul>
        <div className="hamburger-menu__image-container">
          <a href="https://www.instagram.com/spicynuggsx/">
            <Image
              src={InstagramIcon}
              alt="InstagramIcon"
              className="hamburger-menu__image"
            />
          </a>
          <a href="https://www.youtube.com/@spicynuggsx">
            <Image
              src={YoutubeIcon}
              alt="YoutubeIcon"
              className="hamburger-menu__image"
            />
          </a>
          <a href="https://www.tiktok.com/@spicynuggsx">
            <Image
              src={TikTokIcon}
              alt="TikTokIcon"
              className="hamburger-menu__image"
            />
          </a>
          <a href="https://www.twitch.tv/spicynuggsx">
            <Image
              src={TwitchIcon}
              alt="TwitchIcon"
              className="hamburger-menu__image"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
