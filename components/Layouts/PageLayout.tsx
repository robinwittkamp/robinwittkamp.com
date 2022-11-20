// import PropTypes from 'prop-types';
import { ReactElement, ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps): ReactElement => (
  <>
    <Header />
    <main className="min-w-[20rem] overflow-hidden md:overflow-auto">{children}</main>
    <Footer />
  </>
);

// PageLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default PageLayout;
