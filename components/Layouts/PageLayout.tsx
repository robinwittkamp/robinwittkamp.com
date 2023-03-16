import type { ReactElement, ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
