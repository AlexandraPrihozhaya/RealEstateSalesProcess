import React from 'react';
import Header from '../../components/headerComponents/Header';
import MainHeader from '../../components/headerComponents/MainHeader';
import BlockInfo from '../../components/blockInfoComponents/BlockInfo';
import BlockDescription from '../../components/blockDescriptionComponents/BlockDescription';
import BlockAbout from '../../components/blockAboutComponents/BlockAbout';
import AllServices from '../../components/blockServices/AllServices';
import RequestForm from '../../components/requestsFormComponents/RequestForm';
import Footer from '../../components/footerComponents/Footer';



const MainPage = () => {
  return (
    <section>
      <Header />
      <MainHeader />
      <BlockInfo />
      <RequestForm />
      <AllServices />
      <BlockDescription />
      <BlockAbout />
      <Footer />
    </section>
  );
};

export default MainPage;