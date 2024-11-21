// import Image from "next/image";
// import styles from "@/app/ui/home.module.css";
// import clsx from "clsx";
// import Link from "next/link";
import Header from "../../components/header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/footer";
export default function Page() {
  return (
    <div>
      <div className="container">
        <Header />
        <h1 className="heading__lg">Contact Us</h1>
        <section className="contact__wrapper">
          <ContactForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}
