import Head from '../components/Head';
import Layout from '../components/Layout';
import ErrorLayout from '../components/Layouts/ErrorLayout';

const Custom404 = () => (
  <Layout>
    <Head title="Page not found - Robin Wittkamp" />
    <ErrorLayout
      headingText="Page not found"
      bodyText="The link you followed may be broken, or the page may have been removed."
    />
  </Layout>
);

export default Custom404;
