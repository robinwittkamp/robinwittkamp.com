import Link from 'next/link';
import Head from '../components/Head';
import Layout from '../components/Layout';

const Custom500 = () => (
  <Layout>
    <Head title="Server-side error occurred | Robin Wittkamp" />
    <span>{'<(☉︵☉)>'}</span>
    <h1>Server-side error occurred</h1>
    {/* <p>The link you followed may be broken, or the page may have been removed.</p> */}
    <Link href="/">Home</Link>
  </Layout>
);

export default Custom500;
