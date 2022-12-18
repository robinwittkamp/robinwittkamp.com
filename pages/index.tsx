import type { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LinkButton from '../components/Buttons/LinkButton';
import ProjectCard from '../components/Cards/ProjectCard';
import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import CtaContactSection from '../components/Sections/CtaContactSection';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';
// import klifraMockup from '../public/images/klifra_mockup_iphone-13-pro.png';
// import energiewerkRuegenMockup from '../public/images/energiewerk-ruegen_mockup_iphone-13-pro.png';
// import fewoPutbusMockup from '../public/images/ferienwohnung-putbus_mockup_iphone-13-pro.png';
import KlifraBrowser from '../public/images/klifra_mockup_browser.png';
// import LinTecBrowser from '../public/images/lin-tec_mockup_browser_5.png';
// import LinTecFuturePadMockup from '../public/images/lin-tec_mockup_future_pad.png';
// import LinTecMacBookProMockup from '../public/images/lin-tec_mockup_macbook_pro.png';
// import AdessoLogo from '../public/images/logos/adesso_logo.svg';
import BauraumMvLogo from '../public/images/logos/bauraum_mv_logo.svg';
import EnergiewerkRuegenLogo from '../public/images/logos/energiewerk_ruegen_logo.svg';
import HowToSosLogo from '../public/images/logos/how_to_sos_logo.svg';
// import HshlLogo from '../public/images/logos/hshl_logo.svg';
import KuttigEngineeringLogo from '../public/images/logos/kuttig_engineering_logo.svg';
import LbtRuegenLogo from '../public/images/logos/lbt_ruegen_logo.svg';
import LinTecLogo from '../public/images/logos/lin-tec_logo.svg';
import NewCreationsLogo from '../public/images/logos/new_creations_logo.svg';
import RobertDenierLogo from '../public/images/logos/robert_denier_logo.svg';
import RuegenNaturUrlaubLogo from '../public/images/logos/ruegen_natur_urlaub_logo.svg';
import TherapieHenkeLogo from '../public/images/logos/therapie_henke_logo.svg';
// import robertDenierMockup from '../public/images/robert-denier_mockup_iphone-13-pro.png';
// import webBuddyMockup from '../public/images/webbuddy_mockup_iphone-13-pro.png';

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

const clientLogos = [
  {
    name: 'LBT Rügen logo',
    logo: LbtRuegenLogo,
    svgClassas: 'h-7',
  },
  {
    name: 'Energiewerk Rügen logo',
    logo: EnergiewerkRuegenLogo,
    svgClassas: 'h-7',
  },
  {
    name: 'Robert Denier logo',
    logo: RobertDenierLogo,
    svgClassas: 'h-5',
  },
  {
    name: 'LIN-TEC logo',
    logo: LinTecLogo,
    svgClassas: 'h-8',
  },
  {
    name: 'Bauraum MV logo',
    logo: BauraumMvLogo,
    svgClassas: 'h-10',
  },
  {
    name: 'Kuttig Engineering logo',
    logo: KuttigEngineeringLogo,
    svgClassas: 'h-10',
  },
  {
    name: 'Ruegen Natur Urlaub logo',
    logo: RuegenNaturUrlaubLogo,
    wrapperClasses: 'hidden md:flex',
    svgClassas: 'h-8',
  },
  {
    name: 'How to SOS logo',
    logo: HowToSosLogo,
    wrapperClasses: 'hidden md:flex',
    svgClassas: 'h-10',
  },
  {
    name: 'New Creations logo',
    logo: NewCreationsLogo,
    wrapperClasses: 'hidden md:flex',
    svgClassas: 'h-6',
  },
  {
    name: 'Therapie Henke logo',
    logo: TherapieHenkeLogo,
    wrapperClasses: 'hidden xl:flex',
    svgClassas: 'h-8',
  },
];

// const employerLogos = [
//   {
//     name: 'adesso logo',
//     logo: AdessoLogo,
//     svgClassas: 'h-10',
//   },
//   {
//     name: 'HSHL logo',
//     logo: HshlLogo,
//     svgClassas: 'h-7',
//   },
// ];

const Home = () => {
  const { t, ready } = useTranslation('index');
  if (!ready) return <span>loading translations...</span>;

  return (
    <PageLayout>
      <Head />

      {/* Hero */}
      <Section
        first
        // classes="bg-gradient-radial-hero from-orange-500/10 to-transparent"
      >
        {/* Text container */}
        <div className="space-y-8">
          <div className="flex sm:justify-center">
            <span className="block rounded-full border border-rusty-700 bg-rusty-800 px-4 py-1 text-center font-medium text-rusty-400 lg:text-lg">
              {t('heroSection.tagline')}
            </span>
          </div>
          <Heading
            variant="h1"
            classes="max-w-lg sm:mx-auto sm:max-w-xl sm:text-center lg:max-w-3xl xl:max-w-4xl xl:text-7xl"
          >
            <span className="bg-gradient-to-tr from-red-600 to-amber-400 bg-clip-text text-transparent">
              {t('heroSection.heading_one')}
            </span>
            {t('heroSection.heading_two')}
          </Heading>
          <p className="max-w-md text-xl text-rusty-400 sm:mx-auto sm:text-center lg:max-w-[45rem] lg:text-2xl">
            {t('heroSection.subheading')}
          </p>
          <div className="sm:flex sm:justify-center">
            <LinkButton href="/work" variant="primary">
              {/* View projects */}
              {t('heroSection.button')}
            </LinkButton>
          </div>
        </div>

        {/* Image container */}
        <div className="mt-20 md:mt-24">
          {/* Flex container */}
          <div className="flex justify-center lg:justify-start">
            {/* Spacing container */}
            <div className="flex items-center">
              {/* Browser image */}
              <Image
                className="min-w-full"
                src={KlifraBrowser}
                alt="Klifra website"
                // width={1280}
                sizes="(max-width: 640px) 576px, (max-width: 768px) 704px, (max-width: 1024px) 960px, 1280px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-20 md:mt-24">
          <span className="block text-center text-xl text-rusty-400">
            Trusted by businesses like
          </span>
          {/* Logos container */}
          <div className="mx-auto mt-8 space-y-8 sm:grid sm:max-w-lg sm:grid-cols-2 sm:gap-y-8 sm:gap-x-12 sm:space-y-0 md:max-w-4xl md:grid-cols-3 md:gap-x-0 xl:flex xl:max-w-5xl xl:flex-wrap xl:justify-center xl:gap-x-12">
            {clientLogos.map((item) => (
              <div
                key={item.name}
                className={`flex items-center justify-center ${item.wrapperClasses}`}
              >
                <item.logo className={item.svgClassas} />
              </div>
            ))}
          </div>
          {/* <span className="mt-12 block text-center text-xl text-rusty-400">
          Businesses I worked for as an intern or student
        </span> */}
          {/* <div className="mx-auto mt-8 space-y-8 sm:flex sm:max-w-2xl sm:flex-wrap sm:items-center sm:justify-center sm:gap-y-4 sm:gap-x-12 sm:space-y-0 xl:max-w-full"> */}
          {/* <div className="mx-auto mt-8 space-y-8 sm:grid sm:max-w-lg sm:grid-cols-2 sm:gap-y-8 sm:gap-x-12 sm:space-y-0 md:max-w-4xl md:grid-cols-2 md:gap-x-0 xl:flex xl:max-w-full xl:justify-center xl:gap-x-12">
          {employerLogos.map((item) => (
            <div key={item.name} className="flex items-center justify-center">
              <item.logo className={item.svgClassas} />
            </div>
          ))}
        </div> */}
        </div>
      </Section>

      {/* About */}
      <Section>
        {/* <span className="font-bold text-purple-500">First things first.</span> */}
        <Heading variant="h2">About me</Heading>
        <div className="md:flex md:gap-16">
          <p className="mt-8 text-xl text-rusty-400 md:flex-1 lg:text-2xl">
            Hi, I&apos;m Robin. Besides my studies I work as a freelance web developer and UI/UX
            designer. In 2018 I registered a business and since then I&apos;ve been implementing
            websites for companies and organizations from all over Germany. Today, I increasingly
            implement websites and web applications that I program from scratch. For this I use
            technologies like{' '}
            <a
              className="text-blue-400"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a>{' '}
            and{' '}
            <a
              className="text-blue-400"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{' '}
            .
          </p>
          <div className="md:mt-0 md:flex-1">
            <div className="mx-auto mt-8 aspect-square max-w-lg rounded-2xl bg-rusty-800" />
            {/* <Image src={Profil} alt="Robin" width={400} height={400} className="rounded-2xl" /> */}
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section>
        {/* <span className="block text-center font-bold text-rose-500">Some of my projects.</span> */}
        <Heading variant="h2" classes="text-center">
          Latest work
        </Heading>
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
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'header', 'index', 'footer'])),
    },
  };
};

export default Home;
