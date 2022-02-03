import Head from '../components/Head';
import Layout from '../components/Layout';
// import HeroCanvas from '../components/Three/HeroCanvas';

const Home = () => (
  <Layout>
    <Head />
    <section className="">
      <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
        Hi, I&apos;m Robin.
        <br />I create corporate designs and develop websites.
      </h1>
    </section>
    <section className="">
      <h2 className="text-center text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
        Latest work
      </h2>
    </section>
    <section className="">
      <h2 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">Contact</h2>
    </section>
    {/* <HeroCanvas /> */}
  </Layout>
);

export default Home;
