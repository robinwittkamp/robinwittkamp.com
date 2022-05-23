import Link from 'next/link';
import Head from '../components/Head';
import Layout from '../components/Layout';

const Custom500 = () => (
  <Layout>
    <Head title="Server-side error occurred - Robin Wittkamp" />
    <span>{'<(☉︵☉)>'}</span>
    <h1>Server-side error occurred</h1>
    <Link href="/">Home</Link>
  </Layout>
);

export default Custom500;
