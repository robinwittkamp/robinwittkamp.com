import Head from '../components/Head';
import Layout from '../components/Layout';
import Button from '../components/Form/LinkButton';

const Home = () => (
  <Layout>
    <Head />

    <section id="home" className="px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <span className="font-bold text-blue-500">Hi 👋🏻, I&apos;m Robin.</span>
      <h1 className="mt-2">Creative web developer</h1>
      <p className="mt-4 text-xl text-neutral-500 dark:text-neutral-300">
        I build fast, reliable websites with a beautiful design and focus on user experience.
      </p>
      <Button link="#work">View projects</Button>
    </section>

    <section id="about" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <span className="font-bold text-purple-500">First things first.</span>
      <h2 className="mt-2">About me</h2>
      <p className="mt-4 text-xl text-neutral-500 dark:text-neutral-300">
        The technologies I currently use the most are Next.js, React.js and WordPress.
      </p>
    </section>

    <section id="work" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <span className="font-bold text-rose-500">Some of my projects.</span>
      <h2 className="mt-2">Latest work</h2>
    </section>

    <section id="contact" className="mt-48 px-4 py-24 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <span className="font-bold text-amber-500">Let&apos;s work together.</span>
      <h2 className="mt-2">Contact</h2>
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
