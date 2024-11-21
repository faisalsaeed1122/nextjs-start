// Mock data or fetch your actual IDs from an API or database
import Image from "next/image";
import Header from "../../../components/header";
import OurSpecialization from "../../../components/OurSpecialization";
import Footer from "../../../components/footer";
import GetStarted from "../../../components/GetStarted";
import servicesData from "../services.json"; // Import JSON
import Link from "next/link";
import Button from "../../../components/button";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesData.find((service) => service.slug === params.slug);

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <div>
      <div className="container">
        <Header />

        <section className="serviceDetail__wrapper">
          <div className="mainHeading__wrap">
            <figure className="image__holder">
              <Image
                src={service.image}
                alt={service.title}
                width={1000}
                height={38}
              />
            </figure>
            <div className="text">
              <Link href="/services">
                <button type="button" className="">
                  <i className="bi bi-arrow-left-short"></i>
                </button>
              </Link>

              <h1>{service.title}</h1>
            </div>
          </div>

          <p>{service.details}</p>
        </section>
      </div>
      <section className="Specialize__Trades">
        <h2>we SPECIALIZE in all construction TRADES</h2>
        <OurSpecialization />
      </section>
      <GetStarted />
      <Footer />
    </div>
  );
}
