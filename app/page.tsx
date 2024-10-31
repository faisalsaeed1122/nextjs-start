import Image from "next/image";
import styles from "./scss/home.module.scss";
import clsx from "clsx";
import Link from "next/link";
import Header from "./components/header";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />

        <div className="">
          <section className="welcome">
            <p>
              A1 Estimation provides Construction Cost Estimating , Quantity
              Takeoffs and Cost Analysis & Management services for Owners,
              General Contractors, Sub Contractors, Architects, Home Builders,
              Engineers, Developers, Designers, Material Suppliers, Cost
              Segregation firms and Real estate industry.
            </p>
            <figure className="welcome__figure">
              <Image
                className="dark:invert"
                src="/quantity-takeoff.jpg"
                alt="Next.js logo"
                width={1000}
                height={38}
                priority
              />

              <div className="figure__caption wow fadeIn">
                {" "}
                A1 Estimation Inc. can play a valuable role in bringing your
                vision to reality.
                <ul className="figure__list">
                  <li className="figure__list-item">
                    We offer volume discount and free quote on our services
                  </li>
                  <li className="figure__list-item">
                    We are quick and accurate{" "}
                  </li>
                  <li className="figure__list-item">
                    {" "}
                    We provide monthly or yearly contracts as well{" "}
                  </li>
                  <li className="figure__list-item">
                    {" "}
                    We also provide highlighted plans with estimate so you can
                    review work accuracy
                  </li>
                </ul>
              </div>
            </figure>
            <a className="button__cta">
              <div className="anchor__inner">
                <span className="ui-line"></span>
                <span className="button-text"> More About Us</span>
              </div>
            </a>
          </section>
        </div>

        <section className="get-started">
          <div className="container">
            <p>
              The ultimate source to get your construction bids ready within 48
              hours.
            </p>
            <a className="sweep-btn--left">Get Started</a>
          </div>
        </section>

        <Button />
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex items-center justify-center p-6  md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-banner.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

        <div className={styles.shape} />

        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />

        <h1 className="text-3xl font-bold">Hello world!</h1>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
        </div>
      </main>
    </div>
  );
}
