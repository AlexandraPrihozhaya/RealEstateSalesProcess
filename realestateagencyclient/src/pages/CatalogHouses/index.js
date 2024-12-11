import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import SearchFieldType from '../../components/catalogComponents/SearchFieldType';

const CatalogHouses = () => {
  return (
    <section>
      <Header />
      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/catalog", label: "Каталог недвижимости" },
          { path: "/houses", label: "Дома и коттеджи" },
        ]}
      />
      <SearchFieldType typeObject="Дом" />
      <Footer />
    </section>
  );
};

export default CatalogHouses;