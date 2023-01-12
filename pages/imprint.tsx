import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';

const Imprint = () => {
  const { t, ready } = useTranslation('imprint');
  if (!ready) return <span>Loading translations...</span>;

  return (
    <PageLayout>
      <Head title={t('title')} description={t('description')} noIndex />
      <Section first>
        <Heading variant="h1">{t('heading')}</Heading>
      </Section>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'header',
        'imprint',
        'footer',
      ])),
    },
  };
};

export default Imprint;
