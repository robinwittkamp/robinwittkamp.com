import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Sections/Section';
import UnstyledTextWrapper from '../components/Text/UnstyledTextWrapper';
import localDe from '../locales/de/privacyPolicy';
import PrivacyPolicyContentDe from '../locales/de/PrivacyPolicyContent';
import localEn from '../locales/en/privacyPolicy';
import PrivacyPolicyContentEn from '../locales/en/PrivacyPolicyContent';

const PrivacyPolicy = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} noIndex />
      <Section first maxScreenWidth="md">
        <UnstyledTextWrapper>
          {locale === 'en' ? <PrivacyPolicyContentEn /> : <PrivacyPolicyContentDe />}
        </UnstyledTextWrapper>
      </Section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
