import React from 'react';
import { SSection, SH1, SImg } from './styled'; 
import { SSpan } from '../../blockAdvantages/Advantages/styled';
import star from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/star.png"


const HeaderAdvantages = () => {
  return (
    <SSection>
      <SImg src={star}/>
      <SImg src={star}/>
      <SImg src={star}/>
      <SH1>Почему именно <SSpan>Адрес успеха</SSpan>?</SH1>
      <SImg src={star}/>
      <SImg src={star}/>
      <SImg src={star}/>
    </SSection>
  );
};

export default HeaderAdvantages;