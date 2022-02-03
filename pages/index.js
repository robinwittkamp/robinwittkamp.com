import Head from '../components/Head';
import Layout from '../components/Layout';
// import HeroCanvas from '../components/Three/HeroCanvas';

const Home = () => (
  <Layout>
    <Head />
    <section className="mt-16">
      <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
        Hi, I&apos;m Robin.
        <br />I create corporate designs and develop websites.
      </h1>
      {/* <HeroCanvas /> */}
    </section>

    <section className="mt-16">
      <h2 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">Latest work</h2>
    </section>

    <section className="mt-16">
      <h2 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">Contact</h2>
    </section>
  </Layout>
);

export default Home;
