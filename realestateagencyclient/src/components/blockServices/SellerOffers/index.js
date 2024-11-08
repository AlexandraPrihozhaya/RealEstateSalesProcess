import React from 'react';
import { SSection, SH1, SDivServices, SDivService, SDivImage, SImg, SDivContent, SH3, SP } from './styled';
import valuation from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/valuation.png"
import promotion from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/promotion.png"
import show from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/show.png"
import meeting from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/meeting.png"


const SellerOffers = () => {
  return (
      <SSection>
      <SH1>Что мы делаем для вас?</SH1>
      <SDivServices>
      <SDivService>
        <SDivImage>
          <SImg src={valuation} alt="Пример недвижимости" />
        </SDivImage>
        <SDivContent>
          <SH3>Проведем оценку вашей недвижимости</SH3>
          <SP>Расскажите нам о своих желаниях, о вашем бюджете и о том, что для вас важно в будущем доме.
            Мы изучим характеристики вашего объекта и определим его реальную стоимость на рынке.</SP>
        </SDivContent>
      </SDivService>

        <SDivService>
        <SDivImage>
          <SImg src={promotion} alt="Пример недвижимости" />
        </SDivImage>
        <SDivContent>
          <SH3>Широкое продвижение</SH3>
          <SP>Мы разместим информацию о вашем объекте на нашем сайте, чтобы обеспечить максимальную 
            видимость вашего объекта для потенциальных покупателей.</SP>
         </SDivContent>
        </SDivService>

        <SDivService>
        <SDivImage>
          <SImg src={show} alt="Пример недвижимости" />
        </SDivImage>
        <SDivContent>
          <SH3>Организуем показы</SH3>
          <SP>Мы проведем показы вашего объекта потенциальным покупателям, ответим на все их вопросы 
            и продемонстрируем все преимущества вашей недвижимости.</SP>
         </SDivContent>
        </SDivService>

        <SDivService>
        <SDivImage>
          <SImg src={meeting} alt="Пример недвижимости" />
        </SDivImage>
        <SDivContent>
          <SH3>Проведем переговоры от вашего имени</SH3>
          <SP>Мы ведем переговоры с покупателями от вашего имени, учитывая ваши интересы и желания. 
            Мы поможем вам получить лучшую цену за свою недвижимость.</SP>
         </SDivContent>
        </SDivService>
      </SDivServices>
  </SSection>
  );
};

export default SellerOffers;