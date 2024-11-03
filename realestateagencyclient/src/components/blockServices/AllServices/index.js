import React from 'react';
import { SSection, SDivText, SDivPictures, SH1, SText } from './styled';
import { SSpan } from '../../blockAdvantages/Advantages/styled';
import Service from '../Service';
import clock from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/clock.png"
import security from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/security.png"
import quality from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/quality.png"

const AllServices = () => {
  return (
    <SSection>
      <SDivText>
        <SH1>
            Преимущества
        </SH1>
        <SText>
            Риэлторское агентство <SSpan>Адрес успеха</SSpan> предлагает клиентам множество преимуществ
        </SText>
      </SDivText>
      <SDivPictures>
        <Service name="Экономия времени" photoUrl={clock} text="Мы возьмем на себя всю работу, позволяя вам сэкономить драгоценное время"  />
        <Service name="Безопасность и юридическая защита" photoUrl={security} text="Обеспечим юридическую чистоту сделки, защитив вас от нежелательных рисков"  />
        <Service name="Гарантия качества" photoUrl={quality} text="Несем ответственность за свои действия и предоставляем гарантии на свои услуги" />
      </SDivPictures>
    </SSection>
  );
};

export default AllServices;