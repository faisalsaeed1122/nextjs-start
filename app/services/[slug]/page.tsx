import Image from "next/image";
import Header from "../../../components/header";
import OurSpecialization from "../../../components/OurSpecialization";
import Footer from "../../../components/footer";
import GetStarted from "../../../components/GetStarted";
import servicesData from "../../../public/assets/data/services.json"; // Importing mock data
import Link from "next/link";
import Container from "react-bootstrap/Container";

// Define the props that include params with slug
type ServiceDetailProps = {
  params: {
    slug: string; // Matches the dynamic route parameter
  };
};

// Generate static params, returning a list of slugs
export function generateStaticParams(): { slug: string }[] {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetail({ params }: ServiceDetailProps) {
  if (!params?.slug) {
    return <h1>Invalid Service</h1>;
  }

  const service = servicesData.find((service) => service.slug === params.slug);

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <div>
      <Container>
        <Header />

        <section className="serviceDetail__wrapper">
          <div className="mainHeading__wrap">
            <figure className="image__holder">
              <Image
                src={
                  service.image.startsWith("/")
                    ? service.image
                    : `/${service.image}`
                }
                alt={service.title}
                width={1000}
                height={38}
              />
            </figure>
            <div className="text">
              <Link href="/services">
                <button type="button">
                  <i className="bi bi-arrow-left-short"></i>
                </button>
              </Link>

              <h1>{service.title}</h1>
            </div>
          </div>

          <p>{service.details}</p>
        </section>
      </Container>

      <section className="Specialize__Trades">
        <h2>We specialize in all construction trades</h2>
        <OurSpecialization />
      </section>
      <GetStarted />
      <Footer />
    </div>
  );
}
