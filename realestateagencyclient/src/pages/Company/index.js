import React from 'react';
import Header from '../../components/headerComponents/Header';
import AboutCompany from '../../components/blockAgencyServices/AboutCompany';
import Footer from '../../components/footerComponents/Footer';
import BlockAboutUs from '../../components/blockDescriptionComponents/BlockAboutUs';


const Company = () => {
  return (
    <section>
      <Header />
      <AboutCompany />
      <BlockAboutUs />
      <Footer />
    </section>
  );
};

export default Company;