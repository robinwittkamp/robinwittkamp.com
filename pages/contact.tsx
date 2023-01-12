import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';

const Contact = () => {
  const { t, ready } = useTranslation('imprint');
  if (!ready) return <span>Loading translations...</span>;

  return (
    <PageLayout>
      <Head title={t('title')} description={t('description')} />
      <Section first>
        <Heading variant="h1">{t('heading')}</Heading>
        <div className="mt-16 flex">
          <div />
        </div>
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
        'contact',
        'footer',
      ])),
    },
  };
};

export default Contact;
