import React from 'react';
import Header from '../../components/headerComponents/Header';
import AllServices from '../../components/blockServices/AllServices';
import AboutCompany from '../../components/blockAgencyServices/AboutCompany';
import Footer from '../../components/footerComponents/Footer';

const Company = () => {
  return (
    <section>
      <Header />
      <AboutCompany />
      <AllServices />
      <Footer />
    </section>
  );
};

export default Company;