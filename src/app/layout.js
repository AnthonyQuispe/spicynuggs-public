import "../styles/partials/_global.scss";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "SpicyNuggs - Your One-Stop Shop for Cool Cute Products",
  description:
    "Explore and shop for a wide range of stickers, keychains, sticky notes, calendars, and more at SpicyNuggs. Find the perfect stationery and digital products for your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
