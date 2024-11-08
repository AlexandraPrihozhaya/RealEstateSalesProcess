import React from 'react';
import { SSection, SH1, SDivServices, SDivService, SDivImage, SImg, SDivContent, SH3, SP } from './styled';
import need from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/need.png"
import ideal from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/ideal.png"
import meeting from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/meeting.png"
import iconlaw from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/iconlaw.png"


const BuyerOffers = () => {
  return (
      <SSection>
      <SH1>Что мы делаем для вас?</SH1>
      <SDivServices>
      <SDivService>
        <SDivImage>
          <SImg src={need} alt="Пример недвижимости" />
        </SDivImage>
        <SDivContent>
          <SH3>Вместе с вами определим ваши потребности</SH3>
          <SP>Расскажите нам о своих желаниях, о вашем бюджете и о том, что для вас важно в будущем доме.
            Мы внимательно выслушаем вас, чтобы найти идеальный вариант, который идеально вам подойдет.</SP>
        </SDivContent>
      </SDivService>

        <SDivService>
        <SDivImage>
          <SImg src={ideal} alt="Пример недвижимости" />
        </SDivImage>
        <SDivContent>
          <SH3>Подберем идеальный вариант</SH3>
          <SP>Мы знаем рынок недвижимости и предложим вам только подходящие варианты, чтобы вы не тратили время на бесполезные показы.
            Наши риэлторы найдут для вас идеальный дом, учитывая ваши индивидуальные требования и бюджет.</SP>
         </SDivContent>
        </SDivService>

        <SDivService>
        <SDivImage>
          <SImg src={meeting} alt="Пример недвижимости" />
        </SDivImage>
        <SDivContent>
          <SH3>О профессиональных переговорах позаботимся мы</SH3>
          <SP>Мы ведем переговоры с продавцом от вашего имени, чтобы вы получили лучшую цену и выгодные условия сделки.
            Мы защитим ваши интересы и  поможем вам заключить выгодный договор.</SP>
         </SDivContent>
        </SDivService>

        <SDivService>
        <SDivImage>
          <SImg src={iconlaw} alt="Пример недвижимости" />
        </SDivImage>
        <SDivContent>
          <SH3>Юридическое сопровождение - наша ответственность</SH3>
          <SP>Наши опытные юристы проведут комплексную проверку недвижимости и обеспечат юридическую чистоту сделки. 
            Мы гарантируем, что ваша покупка будет безопасной и без рисков.</SP>
         </SDivContent>
        </SDivService>
      </SDivServices>
  </SSection>
  );
};

export default BuyerOffers;