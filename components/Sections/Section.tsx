import type { ReactElement, ReactNode } from 'react';

type SectionProps = {
  children: ReactNode | ReactNode[];
  classes?: string;
  first?: boolean;
  id?: string | undefined;
  maxScreenWidth?: 'sm' | 'md' | 'lg' | 'xl';
};

const maxScreenWidthVariants = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
};

const Section = ({
  children,
  classes = '',
  first = false,
  id = undefined,
  maxScreenWidth = 'xl',
}: SectionProps): ReactElement => (
  <section
    id={id}
    className={`py-20 px-4 sm:px-8 lg:py-32 ${
      first ? 'pt-28 sm:pt-32 md:pt-36 lg:pt-40' : ''
    } ${classes}`}
  >
    <div className={`mx-auto ${maxScreenWidthVariants[maxScreenWidth]}`}>{children}</div>
  </section>
);

export default Section;
