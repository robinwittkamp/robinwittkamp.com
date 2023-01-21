// import type { GetStaticProps } from 'next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';
import localDe from '../public/locales/de/imprint.json';
import localEn from '../public/locales/en/imprint.json';

const Imprint = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} noIndex />
      <Section first>
        <Heading variant="h1">{t.heading}</Heading>
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
