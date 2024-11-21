import Image from "next/image";
import styles from "../public/assets/scss/home.module.scss";

// import clsx from "clsx";
import Link from "next/link";
import Header from "../components/header";
import Button from "../components/button";
import HeroSwiper from "../components/HeroSwiper";
import TestimonialSwiper from "../components/TestimonialSwiper";
import OurSpecialization from "../components/OurSpecialization";
import WelcomeText from "../components/WelcomeText";
import Footer from "../components/footer";
import GetStarted from "../components/GetStarted";
export default function Home() {
  return (
    <main className="">
      <div className="Hero__Wrapper">
        <div className="container">
          <Header />
          <HeroSwiper />
        </div>
      </div>

      <section className="welcome__wrap">
        <div className="container">
          <p>
            A1 Estimation provides Construction Cost Estimating , Quantity
            Takeoffs and Cost Analysis & Management services for Owners, General
            Contractors, Sub Contractors, Architects, Home Builders, Engineers,
            Developers, Designers, Material Suppliers, Cost Segregation firms
            and Real estate industry.
          </p>

          <WelcomeText />

          <Link href="/about">
            <Button variant="primary">More About Us</Button>
          </Link>
        </div>
      </section>

      <section className="Specialize__Trades">
        <h2>we SPECIALIZE in all construction TRADES</h2>
        <OurSpecialization />
      </section>

      <section className="Testimonials">
        <div className="container">
          <h2 className="heading__with__line">What Our Client Says</h2>
          <TestimonialSwiper />
        </div>
      </section>

      <div className={styles.shape} />
      <GetStarted />
      <Footer />
    </main>
  );
}
