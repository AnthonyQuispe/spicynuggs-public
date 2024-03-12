"use client";
import "./maintenance.scss";
import Image from "next/image";
import Link from "next/link";
import NewsletterSubscription from "@/components/NewsletterSubscription/NewsletterSubscription";
import Logo from "../../assets/logo/Spicynuggs-Logo.svg";

export default function Maintenance() {
  return (
    <main className="maintenance">
      <h1 className="maintenance__title">Under Maintenance</h1>
      <div className="maintenance__center-container">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="maintenance__logo" />
        </Link>
        <p className="maintenance__description maintenance__description--alt">
          Our website is currently under construction as we cook up something
          exciting. Stay tuned for a delectable digital experience, and thank
          you for your patience. We can't wait to unveil what's sizzling behind
          the scenes!
        </p>
      </div>
      <p className="maintenance__description">
        In the meantime, Sign up for our monthly newsletter to stay up to date.
      </p>
      <NewsletterSubscription />
    </main>
  );
}
