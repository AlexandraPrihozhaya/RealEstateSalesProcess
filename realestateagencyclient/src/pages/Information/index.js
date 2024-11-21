import React from 'react';
import Header from '../../components/headerComponents/Header';
import AllServices from '../../components/blockServices/AllServices';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const Information = () => {
  return (
    <section>
      <Header />

      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/information", label: "Информация" },
        ]}
      />

      <AllServices />
    </section>
  );
};

export default Information;