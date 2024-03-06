"use client";

import "./about.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import Placeholder from "../../assets/PicturePlaceHolder.svg";

function About() {
  return (
    <div className="about">
      <h1 className="about__title"> ABOUT SPICYNUGGS</h1>
      <div className="about__content">
        <div className="about__artist-container">
          <Image className="about__img" src={Placeholder} alt="Artist" />
          <div className="about__text-container">
            <h2 className="about__artist-title">Meet The Artist</h2>
            <p className="about__artist-description">
              where creativity sticks! We craft vibrant, high-quality stickers
              to add fun and personality to your world. Express yourself with
              our unique designs, perfect for personalizing any surface.
            </p>
          </div>
        </div>
        <div className="about__how-container">
          <Image className="about__img" src={Placeholder} alt="How" />
          <div className="about__text-container">
            <h2 className="about__how-title">How It's Made</h2>
            <p className="about__how-description">
              where creativity sticks! We craft vibrant, high-quality stickers
              to add fun and personality to your world. Express yourself with
              our unique designs, perfect for personalizing any surface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
