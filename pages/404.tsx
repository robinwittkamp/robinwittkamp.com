import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import ErrorSection from '../components/Sections/ErrorSection';

const Custom404 = () => {
  const { t, ready } = useTranslation('404');
  if (!ready) return <span>Loading translations...</span>;

  return (
    <PageLayout>
      <Head title={t('title')} description={t('description')} noIndex />
      <ErrorSection headingText={t('heading')} bodyText={t('body')} />
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
