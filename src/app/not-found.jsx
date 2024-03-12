"use client";
import "./not-found.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo/Spicynuggs-Logo.svg";

export default function NotFound() {
  return (
    <main className="not-found">
      <Link href="/" className="not-found__link">
        <Image src={Logo} alt="Logo" className="not-found__logo" />
      </Link>
      <h1 className="not-found__title">Page Not Found Error - 404</h1>
      <p className="not-found__description">
        Hi the current page you are looking for is not available or has been
        moved.
      </p>
    </main>
  );
}
