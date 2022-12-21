import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from '../components/Head';
import PageLayout from '../components/Layouts/PageLayout';
import CtaContactSection from '../components/Sections/CtaContactSection';
import Section from '../components/Sections/Section';
import Heading from '../components/Text/Heading';
import TextBlock from '../components/Text/TextBlock';
import TextLink from '../components/Text/TextLink';

const About = () => {
  const { t } = useTranslation('about');
  // if (!ready) return <span>loading translations...</span>;

  return (
    <PageLayout>
      <Head title="About - Robin Wittkamp" />
      <Section first>
        <Heading variant="h1" classes="lg:text-center">
          {t('heading')}
        </Heading>
        <div className="mt-8 lg:mt-16 lg:flex">
          <div className="lg:flex-1" />
          <div className="lg:flex-1">
            <div className="space-y-6">
              <TextBlock>
                Hi, I&apos;m Robin. Besides my studies I work as a{' '}
                <strong>freelance web developer</strong> and <strong>UI/UX designer</strong>. In
                2016 I became interested in web technologies and started implementing my own
                websites in my spare time. In 2018 I registered a <strong>business</strong> and
                since then I&apos;ve been implementing websites for companies and organizations from
                all over Germany. Today, I increasingly implement websites and web applications that
                I program from scratch. For this I use technologies like{' '}
                <TextLink href="https://reactjs.org/" external>
                  React.js
                </TextLink>{' '}
                and{' '}
                <TextLink href="https://nextjs.org/" external>
                  Next.js
                </TextLink>
                .
              </TextBlock>
              <TextBlock>
                Currently I am studying{' '}
                <TextLink
                  href="https://www.hshl.de/en/studying/en-study-programs/en-bachelors-programs/en-visual-computing-and-design/"
                  external
                >
                  Visual computing and Design
                </TextLink>{' '}
                at the{' '}
                <TextLink href="https://www.hshl.de/en/" external>
                  Hamm-Lippstadt University of Applied Sciences
                </TextLink>{' '}
                and writing my final thesis. The thesis is about generating web content from textual
                instructions using Natural Language Processing.
              </TextBlock>
              <TextBlock>
                I am generally very interested in science and technology topics. I am especially
                fascinated by companies in the space exploration sector like{' '}
                <TextLink href="https://www.spacex.com/" external>
                  SpaceX
                </TextLink>{' '}
                and companies in the renewable energy sector like{' '}
                <TextLink href="https://www.tesla.com/" external>
                  Tesla
                </TextLink>
                .
              </TextBlock>
            </div>
          </div>
        </div>
      </Section>

      <CtaContactSection />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['header', 'about', 'footer'])),
    },
  };
};

export default About;
