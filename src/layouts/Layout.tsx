import React from 'react';
import Banner from '../components/Banner';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Banner />
      <main>{children}</main>
      {/* Other components or content */}
    </div>
  );
};

export default Layout;
