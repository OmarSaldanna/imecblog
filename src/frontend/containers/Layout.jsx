import React from 'react';
import Nav from './layout/Nav';
import Footer from './layout/Footer';

const Layout = ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;