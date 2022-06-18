import NextImage from 'next/image';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Form/LinkButton';

import energiewerkRuegenMockup from '../public/images/energiewerk-ruegen_mockup_iphone-13-pro-v2.png';
import fewoPutbusMockup from '../public/images/ferienwohnung-putbus_mockup_iphone-13-pro-v2.png';
import klifraMockup from '../public/images/klifra_mockup_iphone-13-pro_v2.png';
import robertDenierMockup from '../public/images/robert-denier_mockup_iphone-13-pro_v2.png';
import webBuddyMockup from '../public/images/webbuddy_mockup_iphone-13-pro_v2.png';

const Home = () => (
  <Layout>
    <Head />

    <Section id="home" first>
      {/* 50/50 container */}
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
          {/* Flex container */}
          <div className="flex justify-center">
            {/* Spacing container */}
            <div className="mx-auto flex items-center">
              {/* Image 1 */}
              <div className="">
                <NextImage
                  // className="object-contain"
                  // className="max-h-[24rem]"
                  // className="overflow-visible p-16 drop-shadow-xl"
                  src={webBuddyMockup}
                  alt="Klifra website iphone 13 pro mockup"
                  // layout="fill"
                  // layout="responsive"
                  layout="fixed"
                  width={253}
                  height={512}
                  // width="100%"
                  // height="100%"
                  // placeholder="blur"
                  quality="100"
                  // priority
                />
              </div>

              {/* Image 2 */}
              <div className="-ml-24">
                <NextImage
                  // className="object-contain"
                  // className="max-h-[24rem]"
                  // className="absolute top-16"
                  className="z-10"
                  src={energiewerkRuegenMockup}
                  alt="Klifra website iphone 13 pro mockup"
                  // layout="fill"
                  // layout="responsive"
                  layout="fixed"
                  width={285}
                  height={576}
                  // width="100%"
                  // height="100%"
                  // placeholder="blur"
                  quality="100"
                  priority
                />
              </div>

              {/* Image 3 */}
              <div className="-ml-16">
                <NextImage
                  // className="object-contain"
                  // className="max-h-[24rem]"
                  src={klifraMockup}
                  alt="Klifra website iphone 13 pro mockup"
                  // layout="fill"
                  // layout="responsive"
                  layout="fixed"
                  width={221}
                  height={448}
                  // width="100%"
                  // height="100%"
                  // placeholder="blur"
                  quality="100"
                  // priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="about">
      <span className="font-bold text-purple-500">First things first.</span>
      <h2 className="mt-4">About me</h2>
      <p className="mt-4 text-xl text-neutral-500 dark:text-neutral-300">
        The technologies I currently use the most are Next.js, React.js and WordPress.
      </p>
    </Section>

    <Section id="work">
      <span className="font-bold text-rose-500">Some of my projects.</span>
      <h2 className="mt-4">Latest work</h2>
    </Section>

    <Section id="contact">
      <span className="font-bold text-amber-500">Let&apos;s work together.</span>
      <h2 className="mt-4">Contact</h2>
    </Section>

    {/* <Section id="">
      <h1 className="">Heading 1</h1>
      <h2 className="">Heading 2</h2>
      <h3 className="">Heading 3</h3>
      <h4 className="">Heading 4</h4>
      <h5 className="">Heading 5</h5>
      <h6 className="">Heading 6</h6>
    </Section> */}
  </Layout>
);

export default Home;
