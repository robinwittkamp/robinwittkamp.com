import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Layouts/Section';
import CtaContactSection from '../components/Sections/CtaContactSection';

const About = () => (
  <PageLayout>
    <Head title="About - Robin Wittkamp" />
    <Section first>
      <h1 className="lg:text-center">About me</h1>
      <div className="mt-8 lg:mt-16 lg:flex">
        <div className="lg:flex-1" />
        <div className="lg:flex-1">
          <p className="text-xl text-neutral-500 dark:text-neutral-400">
            Hi, I&apos;m Robin. Besides my studies I work as a{' '}
            <strong>freelance web developer</strong> and <strong>UI/UX designer</strong>. In 2016 I
            became interested in web technologies and started implementing my own websites in my
            spare time. In 2018 I registered a <strong>business</strong> and since then I&apos;ve
            been implementing websites for companies and organizations from all over Germany. Today,
            I increasingly implement websites and web applications that I program from scratch. For
            this I use technologies like{' '}
            <a
              className="text-blue-500"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a>{' '}
            and{' '}
            <a
              className="text-blue-500"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{' '}
            .
            <br />
            <br />
            Currently I am studying{' '}
            <a
              className="text-blue-500"
              href="https://www.hshl.de/en/studying/en-study-programs/en-bachelors-programs/en-visual-computing-and-design/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual computing and Design
            </a>{' '}
            at the{' '}
            <a
              className="text-blue-500"
              href="https://www.hshl.de/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hamm-Lippstadt University of Applied Sciences
            </a>{' '}
            and writing my final thesis. The thesis is about generating web content from textual
            instructions using Natural Language Processing.
            <br />
            <br />I am generally very interested in science and technology topics. I am especially
            fascinated by companies in the space exploration sector like{' '}
            <a
              className="text-blue-500"
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SpaceX
            </a>{' '}
            and companies in the renewable energy sector like{' '}
            <a
              className="text-blue-500"
              href="https://www.tesla.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tesla
            </a>
            .
          </p>
        </div>
      </div>
    </Section>

    <CtaContactSection />
  </PageLayout>
);

export default About;
