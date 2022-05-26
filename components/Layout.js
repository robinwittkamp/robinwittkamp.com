import PropTypes from 'prop-types';
import Header from './Header/HeaderUnfold';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="min-w-[20rem] pt-12 md:pt-[4.5rem]">{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
