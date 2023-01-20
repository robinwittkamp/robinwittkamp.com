import type { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import Grid from '../components/Backgrounds/Grid';
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
// import KlifraBrowserMockupMockup from '../public/images/klifra_mockup_browser.png';
import KlifraPadMockup from '../public/images/klifra_mockup_pad.png';
// import LinTecBrowser from '../public/images/lin-tec_mockup_browser_5.png';
// import LinTecPadMockup from '../public/images/lin-tec_mockup_pad.png';
// import LinTecMacBookProMockup from '../public/images/lin-tec_mockup_macbook_pro.png';
// import AdessoLogo from '../public/images/logos/adesso_logo.svg';
import BauraumMvLogo from '../public/logos/bauraum_mv_logo.svg';
import EnergiewerkRuegenLogo from '../public/logos/energiewerk_ruegen_logo.svg';
import HowToSosLogo from '../public/logos/how_to_sos_logo.svg';
// import HshlLogo from '../public/logos/hshl_logo.svg';
import KuttigEngineeringLogo from '../public/logos/kuttig_engineering_logo.svg';
import LbtRuegenLogo from '../public/logos/lbt_ruegen_logo.svg';
import LinTecLogo from '../public/logos/lin-tec_logo.svg';
import NewCreationsLogo from '../public/logos/new_creations_logo.svg';
import RobertDenierLogo from '../public/logos/robert_denier_logo.svg';
import RuegenNaturUrlaubLogo from '../public/logos/ruegen_natur_urlaub_logo.svg';
import TherapieHenkeLogo from '../public/logos/therapie_henke_logo.svg';
// import robertDenierMockup from '../public/images/robert-denier_mockup_iphone-13-pro.png';
// import webBuddyMockup from '../public/images/webbuddy_mockup_iphone-13-pro.png';

type ProjectProps = {
  id: number;
  title: string;
  href: string;
  description: string;
};

type SkillsProps = {
  heading: string;
  paragraph: string;
};

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
  if (!ready) return <span>Loading translations...</span>;

  return (
    <PageLayout>
      <Head title={t('title')} description={t('description')} />

      {/* Hero */}
      <Section
        first
        id="home"
        classes="relative bg-gradient-radial-hero from-rusty-800/50 to-transparent overflow-hidden"
      >
        {/* <Grid /> */}
        {/* Text container */}
        <div className="">
          <div className="flex sm:justify-center">
            <span className="block rounded-full border border-rusty-700 bg-rusty-800 px-4 py-1 text-center font-medium text-rusty-400 lg:text-lg">
              {t('heroSection.tagline')}
            </span>
          </div>
          <Heading
            variant="h1"
            classes="mt-8 max-w-lg sm:mx-auto sm:max-w-xl sm:text-center lg:max-w-3xl xl:max-w-4xl xl:text-7xl"
          >
            <span className="bg-gradient-to-tr from-red-600 to-amber-400 bg-clip-text text-transparent">
              {t('heroSection.headingOne')}
            </span>
            {t('heroSection.headingTwo')}
          </Heading>
          <p className="mt-8 max-w-md text-xl text-rusty-400 sm:mx-auto sm:text-center lg:max-w-[45rem] lg:text-2xl">
            {t('heroSection.subheading')}
          </p>
          <div className="mt-8 sm:flex sm:justify-center">
            <LinkButton href="/#work" variant="primary">
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
                src={KlifraPadMockup}
                alt="Klifra website"
                // width={1280}
                sizes="(max-width: 375px) 343px, (max-width: 640px) 576px, (max-width: 768px) 704px, (max-width: 1024px) 960px, 1280px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-20 md:mt-24">
          <span className="block text-center text-lg text-rusty-400 md:text-xl">
            {t('heroSection.logosDescription')}
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

      {/* Line */}
      {/* <div className="h-px bg-gradient-to-r from-rusty-950/100 via-rusty-700 to-rusty-950/0" /> */}

      {/* About */}
      <Section
        id="about"
        // classes="bg-gradient-radial-hero from-rusty-800/50 to-transparent"
      >
        <Heading variant="h2">{t('aboutSection.heading')}</Heading>
        <div className="md:flex md:gap-16 lg:gap-24">
          <div className="md:flex-1">
            {/* Margin container */}
            <div className="mt-6 lg:mt-8">
              <p className="text-xl text-rusty-400 lg:text-2xl">{t('aboutSection.paragraphOne')}</p>
              <p className="mt-4 text-xl text-rusty-400 lg:mt-6 lg:text-2xl">
                {t('aboutSection.paragraphTwo')}
              </p>
            </div>
          </div>
          <div className="md:flex-1">
            {/* Margin container */}
            <div className="mt-8 md:mt-4 lg:mt-8">
              {/* Skills */}
              <h5 className="text-2xl font-bold text-rusty-100 sm:text-3xl lg:text-4xl">
                {t('aboutSection.skills.heading')}
              </h5>
              {/* Vertical space container */}
              <div className="mt-4 space-y-4">
                {t<string, SkillsProps[]>('aboutSection.skills.items', {
                  returnObjects: true,
                }).map((item) => (
                  <div key={item.heading}>
                    <h6 className="text-base font-medium text-rusty-200 md:text-lg">
                      {item.heading}
                    </h6>
                    <p className="mt-1 text-lg text-rusty-400 md:text-xl">{item.paragraph}</p>
                  </div>
                ))}
              </div>
              {/* Profil image */}
              {/* <div className="mx-auto mt-12 aspect-square max-w-lg rounded-2xl bg-rusty-800 md:mt-0" /> */}
              {/* <Image src={Profil} alt="Robin" width={400} height={400} className="rounded-2xl" /> */}
            </div>
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section id="work">
        <Heading variant="h2" classes="text-center">
          {t('workSection.heading')}
        </Heading>
        {/* Cards container */}
        <div className="mt-8 space-y-8 md:mt-16 md:space-y-16">
          {t<string, ProjectProps[]>('workSection.projects', { returnObjects: true }).map(
            (item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            )
          )}
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
