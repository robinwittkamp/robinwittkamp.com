import PropTypes from 'prop-types';

import Footer from '../Footer';
import Header from '../Header';

const PageLayout = ({ children }) => (
  <>
    <Header />
    <main className="min-w-[20rem] overflow-hidden md:overflow-auto">{children}</main>
    <Footer />
  </>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
