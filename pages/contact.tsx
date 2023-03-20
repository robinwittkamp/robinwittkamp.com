import { useRouter } from 'next/router';

import ContactForm from '@/components/Form/ContactForm';
import Head from '@/components/Head';
import PageLayout from '@/components/Layouts/PageLayout';
import Section from '@/components/Sections/Section';
import SocialLinks from '@/components/Socials/SocialLinks';
import Heading from '@/components/Text/Heading';
import localDe from '@/locales/de/contact';
import localEn from '@/locales/en/contact';

/**
 * Component
 */
const Contact = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <PageLayout>
      <Head title={t.title} description={t.description} />
      <Section first maxScreenWidth="lg">
        <Heading variant="h1">{t.heading}</Heading>
        {/* Flex container */}
        <div className="mt-8 lg:mt-16 lg:flex">
          {/* Left container */}
          <div className="lg:flex-1">
            {/* <p className="text-lg">{t.paragraph}</p> */}
            <Heading variant="h5">{t.contactInformation.email}</Heading>
            <p className="mt-4 text-lg text-rusty-300 lg:mt-6 lg:text-xl">info@robinwittkamp.com</p>
            <Heading variant="h5" classes="mt-8">
              {t.contactInformation.social}
            </Heading>
            <div className="mt-4 lg:mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Right container */}
          <div className="lg:flex-1">
            <Heading variant="h5" classes="mt-12 lg:mt-0">
              {t.form.heading}
            </Heading>
            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;
