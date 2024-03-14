"use client";

import "./Nav.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo/Spicynuggs-Logo.svg";
import HamburgMenu from "../../assets/Hamburg-Menu.svg";
import FavIcon from "../../assets/FavIcon.svg";
import UserIcon from "../../assets/UserIcon.svg";
import CartIcon from "../../assets/CartIcon.svg";
import HamburgerMenu from "../HamburgMenu/HamburgMenu";
import { useState } from "react";

function Nav() {
  const [HamburgerMenuComponent, setHamburgerMenuComponent] = useState(false);

  const toggleMenu = () => {
    setHamburgerMenuComponent(!HamburgerMenuComponent);
  };

  return (
    <nav className="nav">
      <div className="nav__container nav__container--left">
        <button className="nav__button" onClick={toggleMenu}>
          <Image
            src={HamburgMenu}
            alt="Hamburg Menu"
            className="nav__button-image"
          />
        </button>
        {HamburgerMenuComponent && (
          <HamburgerMenu
            setHamburgerMenuComponent={setHamburgerMenuComponent}
          />
        )}
        <Link href="/">
          <Image src={Logo} alt="Logo" className="nav__logo" />
        </Link>
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
