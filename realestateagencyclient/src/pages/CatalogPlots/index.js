import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import SearchFieldType from '../../components/catalogComponents/SearchFieldType';

const CatalogPlots = () => {
  return (
    <section>
      <Header />
      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/catalog", label: "Каталог недвижимости" },
          { path: "/plots", label: "Участки" },
        ]}
      />
      <SearchFieldType typeObject="Участок" />
      <Footer />
    </section>
  );
};

export default CatalogPlots;