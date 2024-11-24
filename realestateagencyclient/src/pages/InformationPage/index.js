import React from 'react';
import Header from '../../components/headerComponents/Header';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Footer from '../../components/footerComponents/Footer';
import Information from '../../components/informationComponents/Information';

const InformationPage = () => {
  return (
    <section>
      <Header />

      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/information", label: "Информация" },
        ]}
      />

      <Information />
      <Footer />
    </section>
  );  
};

export default InformationPage;