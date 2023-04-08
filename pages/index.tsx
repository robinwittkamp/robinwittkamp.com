import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/Buttons/Button';
import ExperienceCard from '@/components/Cards/ExperienceCard';
import ProjectCard from '@/components/Cards/ProjectCard';
import TestimonialCard from '@/components/Cards/TestimonialCard';
import Head from '@/components/Head';
import PageLayout from '@/components/Layouts/PageLayout';
import CtaContactSection from '@/components/Sections/CtaContactSection';
import Section from '@/components/Sections/Section';
import Heading from '@/components/Text/Heading';
import localDe from '@/locales/de/index';
import localEn from '@/locales/en/index';
import KlifraPadMockup from '@/public/images/klifra_mockup_pad.png';
// import AdessoLogo from '@/public/logos/adesso_logo.svg';
import BauraumMvLogo from '@/public/logos/bauraum_mv_logo.svg';
import EnergiewerkRuegenLogo from '@/public/logos/energiewerk_ruegen_logo.svg';
import HowToSosLogo from '@/public/logos/how_to_sos_logo.svg';
// import HshlLogo from '@/public/logos/hshl_logo.svg';
import KuttigEngineeringLogo from '@/public/logos/kuttig_engineering_logo.svg';
import LbtRuegenLogo from '@/public/logos/lbt_ruegen_logo.svg';
import LinTecLogo from '@/public/logos/lin-tec_logo.svg';
import NewCreationsLogo from '@/public/logos/new_creations_logo.svg';
// import OnboarderLogo from '@/public/logos/onboarder_logo.svg';
import RobertDenierLogo from '@/public/logos/robert_denier_logo.svg';
import RuegenNaturUrlaubLogo from '@/public/logos/ruegen_natur_urlaub_logo.svg';
import TherapieHenkeLogo from '@/public/logos/therapie_henke_logo.svg';

/**
 * Logos
 */
const clientLogos = [
  {
    id: 1,
    logo: LbtRuegenLogo,
    wrapperClasses: '',
    svgClasses: 'h-7',
  },
  {
    id: 2,
    logo: EnergiewerkRuegenLogo,
    wrapperClasses: '',
    svgClasses: 'h-7',
  },
  {
    id: 3,
    logo: RobertDenierLogo,
    wrapperClasses: '',
    svgClasses: 'h-5',
  },
  {
    id: 4,
    logo: LinTecLogo,
    wrapperClasses: '',
    svgClasses: 'h-8',
  },
  {
    id: 5,
    logo: BauraumMvLogo,
    wrapperClasses: '',
    svgClasses: 'h-10',
  },
  {
    id: 6,
    logo: KuttigEngineeringLogo,
    wrapperClasses: '',
    svgClasses: 'h-10',
  },
  {
    id: 7,
    logo: RuegenNaturUrlaubLogo,
    wrapperClasses: 'hidden lg:flex',
    svgClasses: 'h-8',
  },
  {
    id: 8,
    logo: HowToSosLogo,
    wrapperClasses: 'hidden lg:flex',
    svgClasses: 'h-10',
  },
  {
    id: 9,
    logo: NewCreationsLogo,
    wrapperClasses: 'hidden lg:flex',
    svgClasses: 'h-6',
  },
  {
    id: 10,
    logo: TherapieHenkeLogo,
    wrapperClasses: 'hidden xl:flex',
    svgClasses: 'h-8',
  },
];

// const employerLogos = [
//   {
//     id: 1,
//     logo: AdessoLogo,
//     wrapperClasses: '',
//     svgClasses: 'h-10',
//   },
//   {
//     id: 2,
//     logo: HshlLogo,
//     wrapperClasses: '',
//     svgClasses: 'h-7',
//   },
//   {
//     id: 3,
//     logo: OnboarderLogo,
//     wrapperClasses: 'hidden md:flex',
//     svgClasses: 'h-10',
//   },
// ];

/**
 * Component
 */
const Home = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} />

      {/* Hero section */}
      <Section
        first
        id="home"
        classes="relative bg-gradient-radial-hero from-rusty-800/50 to-transparent overflow-hidden"
      >
        {/* Text container */}
        <div className="">
          <div className="flex sm:justify-center">
            <span className="block rounded-full border border-rusty-700 bg-rusty-800 px-4 py-1 text-center font-medium text-rusty-400 lg:text-lg">
              {t.heroSection.tagline}
            </span>
          </div>
          <Heading
            variant="h1"
            classes="mt-8 max-w-lg sm:mx-auto sm:max-w-[39rem] sm:text-center lg:max-w-[49rem] xl:max-w-[59rem] xl:text-7xl"
          >
            <span className="bg-gradient-to-tr from-red-600 to-amber-400 bg-clip-text text-transparent">
              {t.heroSection.headingOne}
            </span>
            {t.heroSection.headingTwo}
          </Heading>
          <p className="mt-8 max-w-md text-xl text-rusty-400 sm:mx-auto sm:max-w-[38rem] sm:text-center lg:max-w-[45rem] lg:text-2xl">
            {t.heroSection.subheading}
          </p>
          <div className="mt-8 sm:flex sm:justify-center">
            <Button href="/#work" variant="primary">
              {t.heroSection.button}
            </Button>
          </div>
        </div>

        {/* Image container */}
        <div className="mt-20 md:mt-24">
          <Image
            className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
            src={KlifraPadMockup}
            alt="Klifra website"
            sizes="(max-width: 375px) 343px, (max-width: 640px) 576px, (max-width: 768px) 704px, (max-width: 1024px) 960px, (max-width: 1152px) 1088px, (max-width: 1280px) 1216px, 1280px"
            priority
          />
        </div>

        {/* Company logos */}
        <div className="mt-20 md:mt-24">
          {/* Client logos */}
          {/* Description */}
          <span className="block text-center text-lg text-rusty-400 md:text-xl">
            {t.heroSection.clientLogosDescription}
          </span>
          {/* Logos container */}
          <div className="mx-auto mt-8 space-y-8 text-rusty-100 sm:grid sm:max-w-lg sm:grid-cols-2 sm:gap-x-12 sm:gap-y-8 sm:space-y-0 md:max-w-4xl md:grid-cols-3 md:gap-x-0 xl:flex xl:max-w-5xl xl:flex-wrap xl:justify-center xl:gap-x-12">
            {clientLogos.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-center ${item.wrapperClasses}`}
              >
                <item.logo className={item.svgClasses} />
              </div>
            ))}
          </div>

          {/* Employer logos */}
          {/* Description */}
          {/* <span className="mt-12 block text-center text-lg text-rusty-400 md:text-xl">
            {t.heroSection.employerLogosDescription}
          </span> */}
          {/* Logos container */}
          {/* <div className="mx-auto mt-8 space-y-8 text-rusty-100 sm:grid sm:max-w-lg sm:grid-cols-2 sm:gap-y-8 sm:gap-x-12 sm:space-y-0 md:max-w-4xl md:grid-cols-3 md:gap-x-0 xl:flex xl:max-w-5xl xl:flex-wrap xl:justify-center xl:gap-x-12">
            {employerLogos.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-center ${item.wrapperClasses}`}
              >
                <item.logo className={item.svgClasses} />
              </div>
            ))}
          </div> */}
        </div>
      </Section>

      {/* Line */}
      <div className="h-px bg-gradient-to-r from-rusty-950/100 via-rusty-700 to-rusty-950/100" />

      {/* About section */}
      <Section id="about" classes="bg-gradient-radial-hero from-rusty-800/50 to-transparent">
        <Heading variant="h2">{t.aboutSection.heading}</Heading>
        <div className="md:flex md:gap-16 lg:gap-24">
          <div className="md:flex-1">
            {/* Margin container */}
            <div className="mt-6 lg:mt-8">
              <p className="text-xl text-rusty-400 lg:text-2xl">{t.aboutSection.paragraphOne}</p>
              <p className="mt-4 text-xl text-rusty-400 lg:mt-6 lg:text-2xl">
                {t.aboutSection.paragraphTwo}
              </p>
            </div>
          </div>
          <div className="md:flex-1">
            {/* Margin container */}
            <div className="mt-8 md:mt-4 lg:mt-8">
              {/* Skills */}
              <h2 className="text-2xl font-bold text-rusty-100 sm:text-3xl lg:text-4xl">
                {t.aboutSection.skills.heading}
              </h2>
              {/* Vertical space container */}
              <div className="mt-4 space-y-4">
                {t.aboutSection.skills.items.map((item) => (
                  <div key={item.heading}>
                    <h3 className="text-base font-medium text-rusty-200 md:text-lg">
                      {item.heading}
                    </h3>
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

        {/* Experience */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <h2 className="text-2xl font-bold text-rusty-100 sm:text-3xl lg:text-4xl">
            {t.aboutSection.experience.heading}
          </h2>
          {/* 3 column container */}
          <div className="mt-8 space-y-6 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:space-y-0">
            {t.aboutSection.experience.items.map((item) => (
              <ExperienceCard key={item.id} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </Section>

      {/* Work section */}
      <Section id="work">
        <Heading variant="h2" classes="text-center">
          {t.workSection.heading}
        </Heading>
        {/* Projects container */}
        <div className="mt-8 space-y-8 md:mt-16 md:space-y-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 xl:gap-12">
          {t.workSection.projects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              href={item.href}
              image={item.image}
            />
          ))}
        </div>
      </Section>

      {/* Testimonials section */}
      <Section id="testimonials">
        <Heading variant="h2" classes="text-center">
          {t.testimonialsSection.heading}
        </Heading>
        {/* <p className="mx-auto mt-8 max-w-md text-center text-xl text-rusty-400 sm:max-w-[38rem] lg:max-w-[45rem] lg:text-2xl">
          {t.testimonialsSection.subheading}
        </p> */}
        {/* Testimonials container */}
        <div className="mx-auto mt-8 max-w-lg space-y-8 lg:mt-16 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-8 lg:space-y-0 xl:max-w-none xl:grid-cols-3 xl:gap-8">
          {t.testimonialsSection.testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              position={item.position}
              testimonial={item.testimonial}
            />
          ))}
        </div>
      </Section>

      {/* Contact section */}
      <CtaContactSection />
    </PageLayout>
  );
};

export default Home;
