import { useRouter } from 'next/router';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import ErrorSection from '../components/Sections/ErrorSection';
import localDe from '../locales/de/404';
import localEn from '../locales/en/404';

const Custom404 = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} noIndex />
      <ErrorSection headingText={t.heading} bodyText={t.body} />
    </PageLayout>
  );
};

export default Custom404;
