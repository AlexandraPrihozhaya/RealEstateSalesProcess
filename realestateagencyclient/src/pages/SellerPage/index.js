import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import HelloHeader from '../../components/headerComponents/HelloHeader';
import SellerOffers from '../../components/blockServices/SellerOffers';
import SellBlock from '../../components/blockSellComponents/SellBlock';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const SellerPage = () => {

  return (
    <section>
      <Header />

      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/services", label: "Услуги" },
          { path: "/services/seller", label: "Продажа недвижимости" },
        ]}
      />

      <HelloHeader title="Добро пожаловать на страницу для продавцов!"
      text="Мы рады помочь вам продать ваш дом или квартиру. 
      Наша команда профессионалов с многолетним опытом работы на рынке 
      недвижимости готовы предложить вам качественные услуги и советы на каждом этапе продажи."/>
      <SellBlock/>
      <SellerOffers />
      <Footer />
    </section>
  );
};

export default SellerPage;