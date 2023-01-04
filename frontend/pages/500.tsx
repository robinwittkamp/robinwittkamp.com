import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import ErrorSection from '../components/Sections/ErrorSection';

const Custom500 = () => (
  <PageLayout>
    <Head title="Server-side error occurred - Robin Wittkamp" />
    <ErrorSection
      headingText="Server error"
      bodyText="The server encountered an internal error or misconfiguration and was unable to complete your request."
    />
  </PageLayout>
);

export default Custom500;
