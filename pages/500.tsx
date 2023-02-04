// import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import ErrorSection from '../components/Sections/ErrorSection';
import localDe from '../locales/de/500';
import localEn from '../locales/en/500';

const Custom500 = () => {
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
//       ...(await serverSideTranslations(locale as string, ['common', '500', 'footer'])),
//     },
//   };
// };

export default Custom500;
