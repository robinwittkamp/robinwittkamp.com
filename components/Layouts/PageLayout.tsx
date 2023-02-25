import type { ReactElement, ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';

/**
 * Types
 */
type PageLayoutProps = {
  children: ReactNode;
};

/**
 * Component
 */
const PageLayout = ({ children }: PageLayoutProps): ReactElement => (
  <>
    <Header />
    <main className="min-w-[20rem] overflow-hidden md:overflow-auto">{children}</main>
    <Footer />
  </>
);

export default PageLayout;
