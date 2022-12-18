import type { ReactElement } from 'react';

import LinkButton from '../Buttons/LinkButton';
import Heading from '../Text/Heading';
import Section from './Section';

interface ErrorLayoutProps {
  headingText: string;
  bodyText: string;
}

const ErrorLayout = ({ headingText, bodyText }: ErrorLayoutProps): ReactElement => (
  <Section classes="h-screen max-h-[56rem]" first>
    <Heading variant="h1" classes="max-w-screen-lg sm:mx-auto sm:text-center">
      {headingText}
    </Heading>
    <p className="mt-8 max-w-2xl text-xl text-rusty-400 sm:mx-auto sm:text-center">{bodyText}</p>
    <div className="mt-8 sm:flex sm:justify-center">
      <LinkButton href="/" variant="secondary">
        Home
      </LinkButton>
    </div>
  </Section>
);

export default ErrorLayout;
