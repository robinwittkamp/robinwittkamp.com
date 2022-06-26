import PropTypes from 'prop-types';

const Section = ({ children, classes, first, id }) => (
  // Padding
  <section
    id={id}
    className={`py-20 px-4 sm:py-32 sm:px-8 ${first ? 'pt-28 lg:pt-40' : ''} ${classes}`}
  >
    {/* Max width */}
    <div className="mx-auto max-w-screen-xl">{children}</div>
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  first: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

Section.defaultProps = {
  classes: '',
  first: false,
};

export default Section;
