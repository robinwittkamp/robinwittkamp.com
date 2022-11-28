import type { ReactElement } from 'react';

import LinkButton from '../Buttons/LinkButton';
import Heading from '../Text/Heading';
import Section from './Section';

const CtaContactSection = (): ReactElement => (
  <Section classes="">
    <div className="rounded-[2rem] bg-neutral-800 px-6 py-12 sm:p-16 lg:p-24">
      <Heading variant="h2" classes="sm:text-center">
        Let&apos;s work together
      </Heading>
      <p className="mt-8 max-w-lg text-xl text-neutral-400 sm:mx-auto sm:text-center lg:max-w-xl lg:text-2xl">
        If you are interested in building a project together or if you have any questions, feel free
        to contact me.
      </p>
      <div className="mt-8 sm:flex sm:justify-center">
        <LinkButton href="/contact" variant="primary">
          Get in touch
        </LinkButton>
      </div>
    </div>
  </Section>
);

export default CtaContactSection;
