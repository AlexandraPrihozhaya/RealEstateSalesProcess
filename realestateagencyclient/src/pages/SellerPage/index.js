import React from 'react';
import Header from '../../components/headerComponents/Header';
import AllServices from '../../components/blockServices/AllServices';
import Footer from '../../components/footerComponents/Footer';
import HelloHeader from '../../components/headerComponents/HelloHeader';

const SellerPage = () => {
  return (
    <section>
      <Header />
      <HelloHeader title="Добро пожаловать на страницу для продавцов!"
      text="Мы рады помочь вам продать ваш дом или квартиру. 
      Наша команда профессионалов с многолетним опытом работы на рынке 
      недвижимости готовы предложить вам качественные услуги и советы на каждом этапе продажи."/>
      <AllServices />
      <Footer />
    </section>
  );
};

export default SellerPage;