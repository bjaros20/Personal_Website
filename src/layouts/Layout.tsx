import React, { ReactNode } from 'react'; // Import ReactNode type
import Banner from '../components/Banner';

// Specify the type of props, including the children prop
interface LayoutProps {
  children: ReactNode;
}

// Use the specified props type
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Banner />
      {children}
    </div>
  );
};

export default Layout;
