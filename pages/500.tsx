import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import ErrorSection from '../components/Sections/ErrorSection';

const Custom500 = () => {
  const { t, ready } = useTranslation('index');
  if (!ready) return <span>loading translations...</span>;

  return (
    <PageLayout>
      <Head title="Server-side error occurred - Robin Wittkamp" />
      <ErrorSection
        headingText="Server error"
        bodyText="The server encountered an internal error or misconfiguration and was unable to complete your request."
      />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'header', '500', 'footer'])),
    },
  };
};

export default Custom500;
