import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO() {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
    </Head>
  );
}
