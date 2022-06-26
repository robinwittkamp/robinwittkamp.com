import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer';

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
