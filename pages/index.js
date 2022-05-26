import Head from '../components/Head';
import Layout from '../components/Layout';
import Button from '../components/Form/LinkButton';

const Home = () => (
  <Layout>
    <Head />

    <section id="home" className="px-4 py-24 sm:px-8">
      {/* Flex container */}
      <div className="space-y-16 lg:flex lg:items-center lg:space-x-16 lg:space-y-0">
        {/* Text container */}
        <div className="lg:flex-1">
          <span className="font-bold text-blue-500">Creative web developer</span>
          <h1 className="mt-4">Hi 👋🏻, I&apos;m Robin.</h1>
          <p className="mt-4 max-w-md text-xl text-neutral-500 dark:text-neutral-300">
            I build fast, reliable websites with a beautiful design and focus on user experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button link="#work" variant="primary">
              View projects
            </Button>
            <Button link="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>

        {/* Image container */}
        <div className="lg:flex-1">
          <div className="h-[24rem] rounded-[2rem] bg-neutral-100 dark:bg-neutral-700 lg:h-[32rem]" />
        </div>
      </div>
    </section>

    <section id="about" className="mt-48 px-4 py-24 sm:px-8">
      <span className="font-bold text-purple-500">First things first.</span>
      <h2 className="mt-4">About me</h2>
      <p className="mt-4 text-xl text-neutral-500 dark:text-neutral-300">
        The technologies I currently use the most are Next.js, React.js and WordPress.
      </p>
    </section>

    <section id="work" className="mt-48 px-4 py-24 sm:px-8">
      <span className="font-bold text-rose-500">Some of my projects.</span>
      <h2 className="mt-4">Latest work</h2>
    </section>

    <section id="contact" className="mt-48 px-4 py-24 sm:px-8">
      <span className="font-bold text-amber-500">Let&apos;s work together.</span>
      <h2 className="mt-4">Contact</h2>
    </section>

    {/* <section id="" className="mt-48 px-4 py-24 sm:px-8">
      <h1 className="">Heading 1</h1>
      <h2 className="">Heading 2</h2>
      <h3 className="">Heading 3</h3>
      <h4 className="">Heading 4</h4>
      <h5 className="">Heading 5</h5>
      <h6 className="">Heading 6</h6>
    </section> */}
  </Layout>
);

export default Home;
