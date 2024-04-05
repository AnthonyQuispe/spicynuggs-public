"use client";

import "./shop.scss";
import plus from "../../assets/plus-icon.svg";
import heart from "../../assets/heart-icon.svg";
import heartFilled from "../../assets/FavIcon.svg";
import menu from "../../assets/menu-icon.svg";
import { useEffect, useState } from "react";
import inventoryData from "../../data/inventory.json";
import Image from "next/image";

export default function Inventory() {
  const [inventory, setInventory] = useState(inventoryData); // storing the data from the JSON in a useState

  //   All the Filter useState's
  const [shirtsActive, setShirtsActive] = useState(false);
  const [pantsActive, setPantsActive] = useState(false);
  const [hatsActive, setHatsActive] = useState(false);
  const [miscActive, setMiscActive] = useState(false);
  //   All Size Filter useState's
  const [xsmallActive, setXsmallActive] = useState(false);
  const [smallActive, setSmallActive] = useState(false);
  const [mediumActive, setMediumActive] = useState(false);
  const [largeActive, setLargeActive] = useState(false);
  //   All Color Filter useState's
  const [blackActive, setBlackActive] = useState(false);
  const [yellowActive, setYellowActive] = useState(false);
  const [blueActive, setBlueActive] = useState(false);
  const [redActive, setRedActive] = useState(false);
  const [pinkActive, setPinkActive] = useState(false);
  const [whiteActive, setWhiteActive] = useState(false);
  //   To Check if the filters are active or not
  const [filtersActivated, setFiltersActivated] = useState(false);

  // All of the Filter Click Handlers Toggling the Visual Aspects and setting Filters to activated Status
  const handleBrowseShirts = () => {
    setShirtsActive((prevState) => !prevState); // Toggle shirtsActive
    setFiltersActivated(true);
  };

  const handleBrowsePants = () => {
    setPantsActive((prevState) => !prevState); // Toggle pantsActive
    setFiltersActivated(true);
  };

  const handleBrowseHats = () => {
    setHatsActive((prevState) => !prevState); // Toggle hatsActive
    setFiltersActivated(true);
  };

  const handleBrowseMisc = () => {
    setMiscActive((prevState) => !prevState); // Toggle miscActive
    setFiltersActivated(true);
  };
  //   All the Size Filter Handlers
  const handleBrowseXsmall = () => {
    setXsmallActive((prevState) => !prevState); // Toggle shirtsActive
    setFiltersActivated(true);
  };

  const handleBrowseSmall = () => {
    setSmallActive((prevState) => !prevState); // Toggle pantsActive
    setFiltersActivated(true);
  };

  const handleBrowseMedium = () => {
    setMediumActive((prevState) => !prevState); // Toggle hatsActive
    setFiltersActivated(true);
  };

  const handleBrowseLarge = () => {
    setLargeActive((prevState) => !prevState); // Toggle miscActive
    setFiltersActivated(true);
  };
  //  All the Color Filter Handlers
  const handleBrowseBlack = () => {
    setBlackActive((prevState) => !prevState); // Toggle shirtsActive
    setFiltersActivated(true);
  };

  const handleBrowseYellow = () => {
    setYellowActive((prevState) => !prevState); // Toggle pantsActive
    setFiltersActivated(true);
  };

  const handleBrowseBlue = () => {
    setBlueActive((prevState) => !prevState); // Toggle hatsActive
    setFiltersActivated(true);
  };

  const handleBrowseRed = () => {
    setRedActive((prevState) => !prevState); // Toggle miscActive
    setFiltersActivated(true);
  };
  const handleBrowsePink = () => {
    setPinkActive((prevState) => !prevState); // Toggle miscActive
    setFiltersActivated(true);
  };
  const handleBrowseWhite = () => {
    setWhiteActive((prevState) => !prevState); // Toggle miscActive
    setFiltersActivated(true);
  };

  //   The useEffect that is filtering the data if the filters are activated and setting the filters back off if all are false
  useEffect(() => {
    if (
      shirtsActive ||
      pantsActive ||
      hatsActive ||
      miscActive ||
      xsmallActive ||
      smallActive ||
      mediumActive ||
      largeActive ||
      blackActive ||
      yellowActive ||
      blueActive ||
      redActive ||
      pinkActive ||
      whiteActive
    ) {
      setInventory(
        inventoryData.filter(
          (item) =>
            (shirtsActive && item.category === "shirts") ||
            (pantsActive && item.category === "pants") ||
            (hatsActive && item.category === "hats") ||
            (miscActive && item.category === "misc.") ||
            (xsmallActive && item.size === "XS") ||
            (smallActive && item.size === "S") ||
            (mediumActive && item.size === "M") ||
            (largeActive && item.size === "L") ||
            (blackActive && item.color === "Black") ||
            (yellowActive && item.color === "Yellow") ||
            (blueActive && item.color === "Blue") ||
            (redActive && item.color === "Red") ||
            (pinkActive && item.color === "Pink") ||
            (whiteActive && item.color === "White")
        )
      );
      setFiltersActivated(true);
    } else {
      setInventory(inventoryData); // No filters activated, so set inventoryData to unfiltered data
      setFiltersActivated(false);
    }
  }, [
    inventoryData,
    shirtsActive,
    pantsActive,
    hatsActive,
    miscActive,
    xsmallActive,
    smallActive,
    mediumActive,
    largeActive,
    blackActive,
    yellowActive,
    blueActive,
    redActive,
    pinkActive,
    whiteActive,
  ]);

  return (
    <>
      <main className="inventory">
        <div className="inventory__menu">
          <p className="inventory__sort-text">Filter</p>
          <Image
            src={menu}
            className="inventory__menu-icon"
            alt="a hamburger menu"
          />
        </div>
        <div className="inventory__sort">
          <h3 className="inventory__sort-text">Sort:</h3>
          <select className="inventory__select">
            <option className="inventory__select-option" value="featured">
              featured
            </option>
            <option className="inventory__select-option" value="pricelow">
              price low to high
            </option>
            <option className="inventory__select-option" value="pricehigh">
              price high to low
            </option>
          </select>
        </div>
        <section className="inventory__items">
          <aside className="inventory__options">
            <div className="inventory__browse">
              <h3 className="inventory__browse-title">browse by:</h3>
              <p
                onClick={handleBrowseShirts}
                className={`${
                  shirtsActive ? "inventory__browse-option-selected" : null
                } inventory__browse-option`}
              >
                shirts
              </p>
              <p
                onClick={handleBrowsePants}
                className={`${
                  pantsActive ? "inventory__browse-option-selected" : null
                } inventory__browse-option`}
              >
                pants
              </p>
              <p
                onClick={handleBrowseHats}
                className={`${
                  hatsActive ? "inventory__browse-option-selected" : null
                } inventory__browse-option`}
              >
                hats
              </p>
              <p
                onClick={handleBrowseMisc}
                className={`${
                  miscActive ? "inventory__browse-option-selected" : null
                } inventory__browse-option`}
              >
                misc.
              </p>
            </div>
            <div className="inventory__filter">
              <h3 className="inventory__filter-title">filter by:</h3>
              <div className="inventory__filter-option">
                <p>size</p>{" "}
                <Image
                  src={plus}
                  className="inventory__filter-img"
                  alt="plus symbol"
                />
              </div>
              <div className="inventory__sizes">
                <p
                  className={`${
                    xsmallActive ? "inventory__size-selected" : null
                  } inventory__size-xs`}
                  onClick={handleBrowseXsmall}
                >
                  xsmall
                </p>
                <p
                  className={`${
                    smallActive ? "inventory__size-selected" : null
                  } inventory__size-s`}
                  onClick={handleBrowseSmall}
                >
                  small
                </p>
                <p
                  className={`${
                    mediumActive ? "inventory__size-selected" : null
                  } inventory__size-m`}
                  onClick={handleBrowseMedium}
                >
                  medium
                </p>
                <p
                  className={`${
                    largeActive ? "inventory__size-selected" : null
                  } inventory__size-l`}
                  onClick={handleBrowseLarge}
                >
                  large
                </p>
              </div>
              <div className="inventory__filter-option">
                <p>color</p>{" "}
                <Image
                  className="inventory__filter-img"
                  src={plus}
                  alt="plus symbol"
                />
              </div>
              <div className="inventory__colors">
                <p
                  className={`${
                    blackActive ? "inventory__color-selected" : null
                  } inventory__color`}
                  onClick={handleBrowseBlack}
                >
                  black
                </p>
                <p
                  className={`${
                    yellowActive ? "inventory__color-selected" : null
                  } inventory__color`}
                  onClick={handleBrowseYellow}
                >
                  yellow
                </p>
                <p
                  className={`${
                    redActive ? "inventory__color-selected" : null
                  } inventory__color`}
                  onClick={handleBrowseRed}
                >
                  red
                </p>
                <p
                  className={`${
                    whiteActive ? "inventory__color-selected" : null
                  } inventory__color`}
                  onClick={handleBrowseWhite}
                >
                  white
                </p>
                <p
                  className={`${
                    blueActive ? "inventory__color-selected" : null
                  } inventory__color`}
                  onClick={handleBrowseBlue}
                >
                  blue
                </p>
                <p
                  className={`${
                    pinkActive ? "inventory__color-selected" : null
                  } inventory__color-l`}
                  onClick={handleBrowsePink}
                >
                  pink
                </p>
              </div>
            </div>
          </aside>
          <section className="inventory__cards">
            {inventory.map((item) => (
              <div key={item.id} className="inventory__card">
                <article className="inventory__card-img">
                  <Image
                    className="inventory__card-icon"
                    src={heart}
                    alt="empty heart"
                  />
                </article>
                <h3 className="inventory__card-title">{item.title}</h3>
                <h4 className="inventory__card-price">{item.price}</h4>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
}
