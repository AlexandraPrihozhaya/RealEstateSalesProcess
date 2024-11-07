import React from 'react';
import Header from '../../components/headerComponents/Header';
import BuyerServices from '../../components/blockServices/BuyerServices';
import Footer from '../../components/footerComponents/Footer';
import HelloHeader from '../../components/headerComponents/HelloHeader';

const BuyerPage = () => {
  return (
    <section>
      <Header />
      <HelloHeader title="Добро пожаловать на страницу для покупателей!"
      text="Мы рады помочь вам найти ваш идеальный дом или квартиру. 
      Наша команда профессионалов с многолетним опытом работы на рынке 
      недвижимости готовы предложить вам качественные услуги и советы на каждом этапе покупки."/>
      <BuyerServices />
      <Footer />
    </section>
  );
};

export default BuyerPage;