import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import localDe from '../../locales/de/common';
import localEn from '../../locales/en/common';
import Button from '../Buttons/Button';
import Heading from '../Text/Heading';
import Section from './Section';

const CtaContactSection = (): ReactElement => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  return (
    <Section classes="">
      <div className="relative overflow-hidden rounded-[2rem] border border-neutral-700/50 bg-gradient-to-tr from-rusty-900 to-rusty-800 px-6 py-12 sm:p-16 lg:p-24">
        <Heading variant="h2" classes="sm:text-center">
          {t.ctaContactSection.heading}
        </Heading>
        <p className="mt-8 max-w-lg text-xl text-rusty-400 sm:mx-auto sm:text-center lg:max-w-xl lg:text-2xl">
          {t.ctaContactSection.subheading}
        </p>
        <div className="mt-8 sm:flex sm:justify-center">
          <Button href="/contact" variant="primary">
            {t.ctaContactSection.button}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CtaContactSection;
