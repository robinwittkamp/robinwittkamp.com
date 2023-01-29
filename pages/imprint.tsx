import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';
import client from '../lib/sanity/client';
import localDe from '../locales/de/imprint';
import localEn from '../locales/en/imprint';

const Imprint = ({ data }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} noIndex />
      <Section first maxScreenWidth="md">
        <Heading variant="h1">{t.heading}</Heading>
        <Heading variant="h6" classes="mt-6">
          {t.subheading1}
        </Heading>
        <p className="mt-4 whitespace-pre-line">{t.paragraph1}</p>
        <Heading variant="h6" classes="mt-6">
          {t.subheading2}
        </Heading>
        <p className="mt-4 whitespace-pre-line">{t.paragraph2}</p>
        {/* {console.log(data)} */}
        <Heading variant="h1" classes="mt-6">
          {data[0].name}
        </Heading>
      </Section>
    </PageLayout>
  );
};

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//   useCdn: false,
// });

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.fetch(`*[_type == "author"]`);

  return {
    props: {
      data,
    },
  };
};

export default Imprint;
