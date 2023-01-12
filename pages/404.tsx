import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import ErrorSection from '../components/Sections/ErrorSection';

const Custom404 = () => {
  const { t, ready } = useTranslation('index');
  if (!ready) return <span>loading translations...</span>;

  return (
    <PageLayout>
      <Head title="Page not found - Robin Wittkamp" />
      <ErrorSection
        headingText="Page not found"
        bodyText="The link you followed may be broken, or the page may have been removed."
      />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'header', '404', 'footer'])),
    },
  };
};

export default Custom404;
