import React from 'react';
import Header from '../../components/headerComponents/Header';
import MainHeader from '../../components/headerComponents/MainHeader';
import BlockInfo from '../../components/blockInfoComponents/BlockInfo';
import BlockDescription from '../../components/blockDescriptionComponents/BlockDescription';
import BlockAbout from '../../components/blockAboutComponents/BlockAbout';

const MainPage = () => {
  return (
    <section>
      <Header />
      <MainHeader />
      <BlockInfo />
      <BlockDescription />
      <BlockAbout />
    </section>
  );
};

export default MainPage;