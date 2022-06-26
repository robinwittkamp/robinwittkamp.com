import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import ErrorLayout from '../components/Layouts/ErrorLayout';

const Custom500 = () => (
  <PageLayout>
    <Head title="Server-side error occurred - Robin Wittkamp" />
    <ErrorLayout
      headingText="Server error"
      bodyText="The server encountered an internal error or misconfiguration and was unable to complete your request."
    />
  </PageLayout>
);

export default Custom500;
