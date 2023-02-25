import type { ReactElement } from 'react';

import Button from '../Buttons/Button';
import Heading from '../Text/Heading';
import Section from './Section';

/**
 * Types
 */
type ErrorLayoutProps = {
  headingText: string;
  bodyText: string;
};

/**
 * Component
 */
const ErrorLayout = ({ headingText, bodyText }: ErrorLayoutProps): ReactElement => (
  <Section classes="h-screen max-h-[56rem]" first>
    <Heading variant="h1" classes="max-w-screen-lg sm:mx-auto sm:text-center">
      {headingText}
    </Heading>
    <p className="mt-8 max-w-2xl text-xl text-rusty-400 sm:mx-auto sm:text-center">{bodyText}</p>
    <div className="mt-8 sm:flex sm:justify-center">
      <Button href="/" variant="secondary">
        Home
      </Button>
    </div>
  </Section>
);

export default ErrorLayout;
