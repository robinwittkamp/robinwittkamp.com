import Image from 'next/image';

import ProjectCard from '../components/Cards/ProjectCard';
import LinkButton from '../components/Form/LinkButton';
import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import CtaContactSection from '../components/Sections/CtaContactSection';
import Section from '../components/Sections/Section';
import energiewerkRuegenMockup from '../public/images/energiewerk-ruegen_mockup_iphone-13-pro.png';
// import fewoPutbusMockup from '../public/images/ferienwohnung-putbus_mockup_iphone-13-pro.png';
import klifraMockup from '../public/images/klifra_mockup_iphone-13-pro.png';
import BauraumMvLogo from '../public/images/logos/bauraum_mv_logo.svg';
import EnergiewerkRuegenLogo from '../public/images/logos/energiewerk_ruegen_logo.svg';
import KuttigEngineeringLogo from '../public/images/logos/kuttig_engineering_logo.svg';
import LbtRuegenLogo from '../public/images/logos/lbt_ruegen_logo.svg';
import LinTecLogo from '../public/images/logos/lin-tec_logo.svg';
import RobertDenierLogo from '../public/images/logos/robert_denier_logo.svg';
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

const logos = [
  {
    name: 'LBT Rügen Logo',
    logo: LbtRuegenLogo,
    classes: 'h-7',
  },
  {
    name: 'Energiewerk Rügen Logo',
    logo: EnergiewerkRuegenLogo,
    classes: 'h-8',
  },
  {
    name: 'Robert Denier Logo',
    logo: RobertDenierLogo,
    classes: 'h-5',
  },
  {
    name: 'LIN-TEC Logo',
    logo: LinTecLogo,
    classes: 'h-9',
  },
  {
    name: 'Bauraum MV Logo',
    logo: BauraumMvLogo,
    classes: 'h-10',
  },
  {
    name: 'Kuttig Engineering Logo',
    logo: KuttigEngineeringLogo,
    classes: 'h-11',
  },
];

const Home = () => (
  <PageLayout>
    <Head />

    {/* Hero */}
    <Section first>
      {/* Text container */}
      <div className="space-y-8">
        <div className="flex sm:justify-center">
          <span className="block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1 text-center font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
            Developer &bull; Designer &bull; Freelancer
          </span>
        </div>
        <h1 className="max-w-lg sm:mx-auto sm:max-w-xl sm:text-center md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
          Beautiful websites that improve your business
        </h1>
        <p className="max-w-md text-xl text-neutral-500 dark:text-neutral-400 sm:mx-auto sm:text-center lg:max-w-xl lg:text-2xl">
          Fast and reliable websites with a beautiful design that help to achieve your business
          goals.
        </p>
        <div className="sm:flex sm:justify-center">
          <LinkButton href="/work" variant="primary">
            View projects
          </LinkButton>
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
              <Image
                src={webBuddyMockup}
                alt="Klifra website iphone 13 pro mockup"
                // layout="fixed"
                width={253}
                height={512}
                // priority
              />
            </div>

            {/* Image 2 */}
            <div className="z-10 -ml-24 md:ml-4 lg:ml-12">
              <Image
                src={energiewerkRuegenMockup}
                alt="Klifra website iphone 13 pro mockup"
                // layout="fixed"
                width={285}
                height={576}
                priority
              />
            </div>

            {/* Image 3 */}
            <div className="-ml-24 md:ml-4 lg:ml-12">
              <Image
                src={klifraMockup}
                alt="Klifra website iphone 13 pro mockup"
                // layout="fixed"
                width={253}
                height={512}
                // priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company logos */}
      <div className="mt-24 sm:mt-32">
        <span className="block text-center text-xl text-neutral-500 dark:text-neutral-400">
          Clients I worked with
        </span>
        {/* Logos container */}
        <div className="mx-auto mt-12 space-y-8 text-neutral-800 dark:text-neutral-100 sm:flex sm:flex-wrap sm:gap-y-12 sm:space-y-0 md:max-w-2xl lg:max-w-[58rem]">
          {logos.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center sm:flex-[1_1_50%] lg:flex-[1_1_33.3%]"
            >
              <item.logo className={item.classes} />
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* About */}
    <Section>
      {/* <span className="font-bold text-purple-500">First things first.</span> */}
      <h2 className="">About me</h2>
      <p className="mt-8 text-xl text-neutral-500 dark:text-neutral-400 lg:text-2xl">
        Hi, I&apos;m Robin. Besides my studies I work as a{' '}
        <span className="text-neutral-800 dark:text-neutral-300">freelance web developer</span> and{' '}
        <span className="text-neutral-800 dark:text-neutral-300">UI/UX designer</span>. In 2018 I
        registered a <span className="text-neutral-800 dark:text-neutral-300">business</span> and
        since then I&apos;ve been implementing websites for companies and organizations from all
        over Germany. Today, I increasingly implement websites and web applications that I program
        from scratch. For this I use technologies like{' '}
        <a
          className="text-blue-600 dark:text-blue-400"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
        </a>{' '}
        and{' '}
        <a
          className="text-blue-600 dark:text-blue-400"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{' '}
        .
      </p>
    </Section>

    {/* Work */}
    <Section>
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

    <CtaContactSection />

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