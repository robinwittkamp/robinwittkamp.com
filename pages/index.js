import NextImage from 'next/image';

import ProjectCard from '../components/Cards/ProjectCard';
import LinkButton from '../components/Form/LinkButton';
import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import Section from '../components/Layouts/Section';
import energiewerkRuegenMockup from '../public/images/energiewerk-ruegen_mockup_iphone-13-pro.png';
// import fewoPutbusMockup from '../public/images/ferienwohnung-putbus_mockup_iphone-13-pro.png';
import klifraMockup from '../public/images/klifra_mockup_iphone-13-pro.png';
// import robertDenierMockup from '../public/images/robert-denier_mockup_iphone-13-pro.png';
import webBuddyMockup from '../public/images/webbuddy_mockup_iphone-13-pro.png';

const projects = [
  {
    title: 'Robert Denier',
    href: 'https://robertdenier.de',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'Energiewerk Rügen',
    href: 'https://energiewerk-ruegen.de',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'Ferienwohnung Putbus',
    href: 'https://ferienwohnung-putbus.de',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'WebBuddy',
    href: 'https://webbuddy.robinwittkamp.com',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'Klifra',
    href: 'https://klifra.robinwittkamp.com',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
  {
    title: 'Bauraum MV',
    href: 'https://bauraum-mv.de',
    description:
      'Sed faucibus ligula vel quam ullamcorper varius. Mauris mauris felis, tincidunt et leo ut, mattis bibendum nulla. Nunc aliquet non ipsum sit amet ullamcorper. Cras lacus magna, aliquam id nibh quis, lacinia sollicitudin arcu.',
  },
];

const Home = () => (
  <PageLayout>
    <Head />

    <Section id="home" first>
      {/* Text container */}
      <div>
        {/* <span className="block text-center font-bold text-blue-500">
          Web Developer &bull; UX/UI Designer &bull; Freelancer
        </span> */}
        <h1 className="max-w-lg sm:mx-auto sm:max-w-xl sm:text-center md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
          Beautiful websites that improve your business
        </h1>
        <p className="mt-8 max-w-md text-xl text-neutral-500 dark:text-neutral-400 sm:mx-auto sm:text-center lg:max-w-xl lg:text-2xl">
          I build fast and reliable websites with a beautiful design that bring joy to your users.
        </p>
        <div className="mt-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          <LinkButton href="#work" variant="primary">
            View projects
          </LinkButton>
          {/* <LinkButton link="#contact" variant="secondary">
            Contact
          </LinkButton>
          <LinkButton link="#contact" variant="tertiary">
            Click me
          </LinkButton> */}
        </div>
      </div>

      {/* Image container */}
      <div className="mt-24">
        {/* Flex container */}
        <div className="flex justify-center lg:justify-start">
          {/* Spacing container */}
          <div className="mx-auto flex items-center">
            {/* Image 1 */}
            <div className="">
              <NextImage
                src={webBuddyMockup}
                alt="Klifra website iphone 13 pro mockup"
                layout="fixed"
                width={253}
                height={512}
                // priority
              />
            </div>

            {/* Image 2 */}
            <div className="-ml-24 md:ml-4 lg:ml-12">
              <NextImage
                className="z-10"
                src={energiewerkRuegenMockup}
                alt="Klifra website iphone 13 pro mockup"
                layout="fixed"
                width={285}
                height={576}
                // priority
              />
            </div>

            {/* Image 3 */}
            <div className="-ml-24 md:ml-4 lg:ml-12">
              <NextImage
                src={klifraMockup}
                alt="Klifra website iphone 13 pro mockup"
                layout="fixed"
                width={253}
                height={512}
                // priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="about">
      {/* <span className="font-bold text-purple-500">First things first.</span> */}
      <h2 className="">About me</h2>
      <p className="mt-4 text-xl text-neutral-500 dark:text-neutral-400">
        Hi, I&apos;m Robin. Besides my studies I work as a <strong>freelance web developer</strong>{' '}
        and <strong>UI/UX designer</strong>. In 2016 I became interested in web technologies and
        started implementing my own websites in my spare time. In 2018 I registered a{' '}
        <strong>business</strong> and since then I&apos;ve been implementing websites for
        medium-sized companies and organizations from all over Germany. Today, I increasingly
        implement websites and web applications that I program from scratch. For this I use
        technologies like{' '}
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
    </Section>

    <Section id="work">
      {/* <span className="block text-center font-bold text-rose-500">Some of my projects.</span> */}
      <h2 className="text-center">Latest work</h2>
      {/* Cards container */}
      <div className="mt-8 space-y-8 md:mt-16 md:space-y-16">
        {projects.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </Section>

    <Section id="contact">
      {/* <span className="font-bold text-amber-500">Let&apos;s work together.</span> */}
      <h2 className="">Contact</h2>
    </Section>

    {/* <Section id="test">
      <h1 className="">Heading 1</h1>
      <h2 className="">Heading 2</h2>
      <h3 className="">Heading 3</h3>
      <h4 className="">Heading 4</h4>
      <h5 className="">Heading 5</h5>
      <h6 className="">Heading 6</h6>
    </Section> */}
  </PageLayout>
);

export default Home;
