import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import HeaderAdvantages from '../../components/headerComponents/HeaderAdvantages';
import MoreAdvantages from '../../components/blockAdvantages/MoreAdvantages';

const Advantages = () => {
  return (
    <section>
      <Header />
      <HeaderAdvantages />
      <MoreAdvantages />
      <Footer />
    </section>
  );
};

export default Advantages;