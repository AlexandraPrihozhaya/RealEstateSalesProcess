import React from 'react';
import Menu from '../Menu';
import { SSection, SA, SImage } from './styled';
import logo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/logo.png"


const Header = () => {

  return (
    <SSection>
      <SA href='/'>
        <SImage src={logo}/>
      </SA>

      <Menu />

    </SSection>
  );
};

export default Header;