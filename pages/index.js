import Head from '../components/Head';
import Layout from '../components/Layout';
import CustomCanvas from '../components/Three/CustomCanvas';

const Home = () => (
  <Layout>
    <Head />
    <h1 className="font-bold text-8xl">
      Hi, I&apos;m Robin.
      <br />
      I create corporate designs and develop websites.
    </h1>
    <CustomCanvas />
  </Layout>
);

export default Home;
