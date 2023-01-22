// import type { GetStaticProps } from 'next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';
import localDe from '../locales/de/contact';
import localEn from '../locales/en/contact';

const Contact = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} />
      <Section first>
        <Heading variant="h1">{t.heading}</Heading>
        <div className="mt-16 flex">
          <div />
        </div>
      </Section>
    </PageLayout>
  );
};

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ['common', 'contact', 'footer'])),
//     },
//   };
// };

export default Contact;
