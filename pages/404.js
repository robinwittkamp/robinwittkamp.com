import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import ErrorSection from '../components/Sections/ErrorSection';

const Custom404 = () => (
  <PageLayout>
    <Head title="Page not found - Robin Wittkamp" />
    <ErrorSection
      headingText="Page not found"
      bodyText="The link you followed may be broken, or the page may have been removed."
    />
  </PageLayout>
);

export default Custom404;
