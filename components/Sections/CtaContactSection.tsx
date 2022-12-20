import { useTranslation } from 'next-i18next';
import type { ReactElement } from 'react';

import ThreeDimensionGrid from '../3dGrid';
import LinkButton from '../Buttons/LinkButton';
// import Grid from '../Grid';
import Heading from '../Text/Heading';
import Section from './Section';

const CtaContactSection = (): ReactElement => {
  const { t, ready } = useTranslation('common');
  if (!ready) return <span>loading translations...</span>;

  return (
    <Section classes="">
      <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-gradient-to-tr from-rusty-900/50 to-rusty-800 px-6 py-12 sm:p-16 lg:p-24">
        <ThreeDimensionGrid />
        {/* <Grid /> */}
        <Heading variant="h2" classes="sm:text-center">
          {t('ctaContactSection.heading')}
        </Heading>
        <p className="mt-8 max-w-lg text-xl text-rusty-400 sm:mx-auto sm:text-center lg:max-w-xl lg:text-2xl">
          {t('ctaContactSection.subheading')}
        </p>
        <div className="mt-8 sm:flex sm:justify-center">
          <LinkButton href="/contact" variant="primary">
            {t('ctaContactSection.button')}
          </LinkButton>
        </div>
      </div>
    </Section>
  );
};

export default CtaContactSection;
