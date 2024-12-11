import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import SearchFieldType from '../../components/catalogComponents/SearchFieldType';

const CatalogRooms = () => {
  return (
    <section>
      <Header />
      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/catalog", label: "Каталог недвижимости" },
          { path: "/rooms", label: "Комнаты" },
        ]}
      />
      <SearchFieldType typeObject="Комната" />
      <Footer />
    </section>
  );
};

export default CatalogRooms;