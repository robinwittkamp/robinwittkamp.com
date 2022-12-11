import type { ReactElement, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  classes?: string;
  first?: boolean;
  id?: string | undefined;
}

const Section = ({
  children,
  classes = '',
  first = false,
  id = undefined,
}: SectionProps): ReactElement => (
  <section
    id={id}
    className={`py-20 px-4 sm:px-8 lg:py-32 ${
      first ? 'pt-28 sm:pt-32 md:pt-36 lg:pt-40' : ''
    } ${classes}`}
  >
    <div className="mx-auto max-w-screen-xl">{children}</div>
  </section>
);

export default Section;
