// import type { GetStaticProps } from 'next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import ErrorSection from '../components/Sections/ErrorSection';
import localDe from '../public/locales/de/404.json';
import localEn from '../public/locales/en/404.json';

const Custom404 = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} noIndex />
      <ErrorSection headingText={t.heading} bodyText={t.body} />
    </PageLayout>
  );
};

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ['common', '404', 'footer'])),
//     },
//   };
// };

export default Custom404;
