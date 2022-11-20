// import PropTypes from 'prop-types';
import { ReactElement, ReactNode } from 'react';

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
    className={`py-20 px-4 sm:py-32 sm:px-8 ${first ? 'pt-28 lg:pt-40' : ''} ${classes}`}
  >
    <div className="mx-auto max-w-screen-xl">{children}</div>
  </section>
);

// Section.propTypes = {
//   children: PropTypes.node.isRequired,
//   classes: PropTypes.string,
//   first: PropTypes.bool,
//   id: PropTypes.string,
// };

// Section.defaultProps = {
//   classes: '',
//   first: false,
//   id: null,
// };

export default Section;
