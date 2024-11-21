import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import HeaderAdvantages from '../../components/headerComponents/HeaderAdvantages';
import MoreAdvantages from '../../components/blockAdvantages/MoreAdvantages';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const Advantages = () => {
  return (
    <section>
      <Header />

      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/company", label: "О компании" },
          { path: "/company/advantages", label: "Преимущества" },
        ]}
      />

      <HeaderAdvantages />
      <MoreAdvantages />
      <Footer />
    </section>
  );
};

export default Advantages;