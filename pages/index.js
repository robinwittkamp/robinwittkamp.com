import Head from '../components/Head';
import Layout from '../components/Layout';
// import HeroCanvas from '../components/Three/HeroCanvas';

const Home = () => (
  <Layout>
    <Head />

    <section id="home" className="px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
        Hi, I&apos;m Robin.
      </h1>
      <p className="mt-6 text-xl">
        I build fast, reliable websites with a simple, modern design and focus on user experience.
        The technologies I currently use the most are Next.js, React.js and WordPress.
      </p>
      <a className="mt-6 block text-xl font-bold">View projects</a>
      {/* <HeroCanvas /> */}
    </section>

    <section id="about" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h2 className="text-center text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
        About me
      </h2>
    </section>

    <section id="work" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h2 className="text-center text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
        Latest work
      </h2>
    </section>

    <section id="contact" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h2 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">Contact</h2>
    </section>
  </Layout>
);

export default Home;
