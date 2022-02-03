import Head from '../components/Head';
import Layout from '../components/Layout';
// import HeroCanvas from '../components/Three/HeroCanvas';

const Home = () => (
  <Layout>
    <Head />
    <section id="home" className="mt-24 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
        Hi, I&apos;m Robin.
        <br />I create corporate designs and develop websites.
      </h1>
      <a className="mt-16 block text-2xl font-extrabold">View my projects 👇🏻</a>
      {/* <HeroCanvas /> */}
    </section>

    <section id="about" className="mt-48 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h2 className="text-center text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
        About me
      </h2>
    </section>

    <section id="work" className="mt-48 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h2 className="text-center text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
        Latest work
      </h2>
    </section>

    <section id="contact" className="mt-48 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h2 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">Contact</h2>
    </section>
  </Layout>
);

export default Home;
