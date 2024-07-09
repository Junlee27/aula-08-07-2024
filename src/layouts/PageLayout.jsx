import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
