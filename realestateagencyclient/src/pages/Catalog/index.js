import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import SearchField from '../../components/catalogComponents/SearchField';
import CatalogObjects from '../../components/catalogComponents/CatalogObjects';

const Catalog = () => {
  return (
    <section>
      <Header />
      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/catalog", label: "Каталог недвижимости" },
        ]}
      />
      <SearchField />
      <CatalogObjects />
      <Footer />
    </section>
  );
};

export default Catalog;