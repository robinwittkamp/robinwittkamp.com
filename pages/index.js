import Head from '../components/Head';
import Layout from '../components/Layout';
import HeroCanvas from '../components/Three/HeroCanvas';

const Home = () => (
  <Layout>
    <Head />
    <section className="">
      <h1 className="font-bold text-8xl">
        Hi, I&apos;m Robin.
        <br />
        I create corporate designs and develop websites.
      </h1>
    </section>
    <HeroCanvas />
  </Layout>
);

export default Home;
