"use client";

import "./Nav.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo/Spicynuggs-Logo.svg";
import HamburgMenu from "../../assets/Hamburg-Menu.svg";
import FavIcon from "../../assets/FavIcon.svg";
import UserIcon from "../../assets/UserIcon.svg";
import CartIcon from "../../assets/CartIcon.svg";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container nav__container--left">
        <button className="nav__button">
          <Image
            src={HamburgMenu}
            alt="Hamburg Menu"
            className="nav__button-image"
          />
        </button>
        <Image src={Logo} alt="Logo" className="nav__logo" />
        <form className="nav__searchbar">
          <input className="nav__searchbar-input" placeholder="Enter Text" />
          <button className="nav__searchbar-button">Search</button>
        </form>
      </div>
      <div className="nav__container nav__container--center ">
        <Link className="nav__link" href="/">
          Home
        </Link>
        <Link className="nav__link" href="/shop">
          Shop
        </Link>
        <Link className="nav__link" href="/info">
          Info
        </Link>
        <Link className="nav__link" href="/about">
          About
        </Link>
      </div>
      <div className="nav__container nav__container--right">
        <Link className="nav__link" href="/profile">
          <Image src={UserIcon} alt="User Icon" />
        </Link>
        <Link className="nav__link" href="/favorite">
          <Image src={FavIcon} alt="Favorite Icon" />
        </Link>
        <Link className="nav__link" href="/cart">
          <Image src={CartIcon} alt="Cart Icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
