import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import ObjectInfo from '../../components/catalogComponents/ObjectInfo';
import { Map } from '@pbe/react-yandex-maps';

const ObjectPage = () => {
  return (
    <section>
      <Header />

      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/catalog", label: "Каталог недвижимости" },
        ]}
      />
      <ObjectInfo />
      <Footer />
    </section>
  );
};

export default ObjectPage;