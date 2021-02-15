import Link from 'next/link';
import Head from '../components/Head';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Head title="Page not found | Robin Wittkamp" />
    <span>{'<(☉︵☉)>'}</span>
    <h1>Page not found</h1>
    <p>The link you followed may be broken, or the page may have been removed.</p>
    <Link href="/">Home</Link>
  </Layout>
);

export default NotFoundPage;
