// import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';
import localDe from '../locales/de/imprint';
import localEn from '../locales/en/imprint';

const Imprint = () => {
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
      </Section>
    </PageLayout>
  );
};

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ['common', 'imprint', 'footer'])),
//     },
//   };
// };

export default Imprint;
