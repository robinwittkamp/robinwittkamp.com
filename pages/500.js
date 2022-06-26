import Head from '../components/Head';
import Layout from '../components/Layout';
import ErrorLayout from '../components/Layouts/ErrorLayout';

const Custom500 = () => (
  <Layout>
    <Head title="Server-side error occurred - Robin Wittkamp" />
    <ErrorLayout
      headingText="Server error"
      bodyText="The server encountered an internal error or misconfiguration and was unable to complete your request."
    />
  </Layout>
);

export default Custom500;
