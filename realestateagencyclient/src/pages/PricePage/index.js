import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import HelloHeader from '../../components/headerComponents/HelloHeader';
import PriceServices from '../../components/priceAndTariff/PriceServices';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const PricePage = () => {
  return (
    <section>
      <Header />

      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/services", label: "Услуги" },
          { path: "/services/price", label: "Стоимость услуг" },
        ]}
      />

      <HelloHeader title="Стоимость услуг"
      text="Мы предлагаем четкие и понятные цены на все наши услуги. 
      Вы можете быть уверены, что стоимость соответствует качеству и 
      опыту нашей команды. Познакомьтесь с тарифами на наши услуги и убедитесь в их доступности."/>
      <PriceServices />
      <Footer />
    </section>
  );
};

export default PricePage;