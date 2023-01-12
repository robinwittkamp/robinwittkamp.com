import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';

const Imprint = () => {
  const { t, ready } = useTranslation('index');
  if (!ready) return <span>loading translations...</span>;

  return (
    <PageLayout>
      <Head title="Imprint - Robin Wittkamp" />
      <Section first>
        <Heading variant="h1">Imprint</Heading>
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
