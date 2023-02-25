import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import UnstyledTextWrapper from '../components/Text/UnstyledTextWrapper';
import localDe from '../locales/de/imprint';
import ImprintContentDe from '../locales/de/ImprintContent';
import localEn from '../locales/en/imprint';
import ImprintContentEn from '../locales/en/ImprintContent';

/**
 * Component
 */
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

export default Imprint;
