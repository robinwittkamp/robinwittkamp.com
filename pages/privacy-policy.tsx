import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';

const PrivacyPolicy = () => {
  const { t, ready } = useTranslation('index');
  if (!ready) return <span>loading translations...</span>;

  return (
    <PageLayout>
      <Head title="Privacy policy - Robin Wittkamp" />
      <Section first>
        <Heading variant="h1">Privacy policy</Heading>
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
        'privacy-policy',
        'footer',
      ])),
    },
  };
};

export default PrivacyPolicy;
