"use client";
import "./login.scss";
import React, { useEffect } from "react";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import Link from "next/link";

export default function LoginPage() {
  useEffect(() => {
    const backgroundElement = document.querySelector(".footer");
    if (backgroundElement) {
      backgroundElement.classList.add("footer--alt");
    }
  }, []);

  return (
    <section className="login-page">
      <form className="login-page__form">
        <h1 className="login-page__title">Sign In</h1>
        <input className="login-page__input" placeholder="Email" />
        <input className="login-page__input" placeholder="Password" />
        <Link className="login-page__link" href={"/"}>
          Forgot Password?
        </Link>
        <button className="login-page__button">Sign In</button>
        <GoogleButton buttonText="Sign In with Google" />
        <Link className="login-page__link" href={"/signup"}>
          Don't have an account ?
          <span className="login-page__link--rose"> Sign up</span>
        </Link>
      </form>
    </section>
  );
}
