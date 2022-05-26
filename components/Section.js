import PropTypes from 'prop-types';

const Section = ({ children, id }) => (
  // Padding
  <section id={id} className="px-4 py-20 sm:px-8 sm:py-32">
    {/* Max width */}
    <div className="mx-auto max-w-screen-xl">{children}</div>
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Section;
