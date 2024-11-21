import React from 'react';
import Header from '../../components/headerComponents/Header';
import AboutCompany from '../../components/blockAgencyServices/AboutCompany';
import Footer from '../../components/footerComponents/Footer';
import BlockAboutUs from '../../components/blockDescriptionComponents/BlockAboutUs';
import GeographyServices from '../../components/blockDescriptionComponents/GeographyServices';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';


const Company = () => {
  return (
    <section>
      <Header />

      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/company", label: "О компании" },
        ]}
      />

      <AboutCompany />
      <BlockAboutUs />
      <GeographyServices />
      <Footer />
    </section>
  );
};

export default Company;