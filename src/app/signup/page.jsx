"use client";
import "./signup.scss";
import React, { useEffect } from "react";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import Link from "next/link";

export default function signupPage() {
  useEffect(() => {
    const backgroundElement = document.querySelector(".footer");
    if (backgroundElement) {
      backgroundElement.classList.add("footer--alt");
    }
  }, []);

  return (
    <section className="signup-page">
      <form className="signup-page__form">
        <h1 className="signup-page__title">Sign Up</h1>
        <input className="signup-page__input" placeholder="Email" />
        <input className="signup-page__input" placeholder="Password" />
        <p className="signup-page__text">
          By continuing, I agree to Spicy Nuggs{" "}
          <Link
            className="signup-page__link signup-page__link--alt"
            href={"/info"}
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            className="signup-page__link signup-page__link--alt"
            href={"/info"}
          >
            Terms of Use{" "}
          </Link>
          .
        </p>
        <button className="signup-page__button">Sign Up</button>
        <GoogleButton buttonText="Sign Up with Google" />
        <Link className="signup-page__link" href={"/login"}>
          Have an Account?{" "}
          <span className="signup-page__link--rose"> Sign in</span>
        </Link>
      </form>
    </section>
  );
}
