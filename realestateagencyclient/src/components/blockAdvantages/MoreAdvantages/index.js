import React from 'react';
import { SSection, SMainDiv, SDiv13, SDiv68, SDiv24, SDiv57, SH3, SText } from './styled'; 
import picture1 from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/picture_1.jpg"
import picture2 from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/picture_2.jpg"
import picture3 from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/picture_3.jpg"
import picture4 from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/picture_4.jpg"


const MoreAdvantages = () => {
  return (
    <SSection>
      <SMainDiv>
        <SDiv13>
          <SH3>Юридическая чистота</SH3>
          <SText>Наши юристы проведут тщательную проверку документов на объект недвижимости, чтобы гарантировать его юридическую чистоту и безопасность сделки для вас.</SText>
        </SDiv13>
        <SDiv24 link={picture1} />
        <SDiv13>
          <SH3>Широкий выбор объектов</SH3>
          <SText>Мы работаем с широкой базой объектов недвижимости, включая квартиры, дома, коммерческую недвижимость и земельные участки. Вы найдете идеальный вариант, отвечающий вашим потребностям.</SText>
        </SDiv13>
        <SDiv24 link={picture2} />
        <SDiv57 link={picture3} />
        <SDiv68>
          <SH3>Профессиональное сопровождение</SH3>
          <SText>Наши риэлторы будут сопровождать вас на всех этапах сделки, от выбора объекта до получения ключей от вашей новой недвижимости.</SText>
        </SDiv68>
        <SDiv57 link={picture4} />
        <SDiv68>
          <SH3>Команда экспертов</SH3>
          <SText>Мы команда опытных и квалифицированных специалистов, которые всегда готовы предоставить вам профессиональную консультацию и помочь найти оптимальное решение.</SText>
        </SDiv68>
      </SMainDiv>
    </SSection>
  );
};

export default MoreAdvantages;