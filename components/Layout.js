import PropTypes from 'prop-types';
import Header from './Header/HeaderUnfold';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="pt-12 md:pt-20">
      <div className="mx-auto max-w-screen-xl">{children}</div>
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
