import Head from '../components/Head';
import Layout from '../components/Layout';
import Button from '../components/Form/LinkButton';
// import HeroCanvas from '../components/Three/HeroCanvas';

const Home = () => (
  <Layout>
    <Head />

    <section id="home" className="px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h1 className="">Hi, I&apos;m Robin.</h1>
      <p className="mt-4 text-xl text-neutral-500 dark:text-neutral-300">
        I build fast, reliable websites with a simple, modern design and focus on user experience.
        The technologies I currently use the most are Next.js, React.js and WordPress.
      </p>
      <Button link="#work">View projects</Button>
      {/* <HeroCanvas /> */}
    </section>

    <section id="about" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h2 className="text-center">About me</h2>
    </section>

    <section id="work" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h2 className="text-center">Latest work</h2>
    </section>

    <section id="contact" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h2 className="">Contact</h2>
    </section>

    <section id="" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <h1 className="">Heading 1</h1>
      <h2 className="">Heading 2</h2>
      <h3 className="">Heading 3</h3>
      <h4 className="">Heading 4</h4>
      <h5 className="">Heading 5</h5>
      <h6 className="">Heading 6</h6>
    </section>
  </Layout>
);

export default Home;
