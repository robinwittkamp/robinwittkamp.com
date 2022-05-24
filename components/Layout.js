import PropTypes from 'prop-types';
import Header from './HeaderUnfold';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="pt-12 md:pt-20">{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
