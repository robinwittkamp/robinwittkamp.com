// import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import UnstyledTextWrapper from '../components/Text/UnstyledTextWrapper';
import localDe from '../locales/de/imprint';
import ImprintContentDe from '../locales/de/imprint-content';
import localEn from '../locales/en/imprint';
import ImprintContentEn from '../locales/en/imprint-content';

const Imprint = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} noIndex />
      <Section first maxScreenWidth="md">
        <UnstyledTextWrapper>
          {locale === 'en' ? <ImprintContentEn /> : <ImprintContentDe />}
        </UnstyledTextWrapper>
      </Section>
    </PageLayout>
  );
};

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ['common', 'imprint', 'footer'])),
//     },
//   };
// };

export default Imprint;
