import React from 'react';
import { SSection, SH1, SDivAdvantages, SDivAdvantage, SDivContent, SDivImage, SH2, SP, SSpan} from './styled';
import experience from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/experience.jpg"
import individual from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/individual.jpg"
import honesty from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/honesty.png"
import security from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/security.jpg"


const Advantages = () => {
  return (
    <SSection>
        <SH1>Почему стоит выбрать <SSpan>Адрес успеха</SSpan>?</SH1>
        <SDivAdvantages>
            <SDivAdvantage>
                <SDivContent>
                    <SH2>Опыт и профессионализм</SH2>
                    <SP>Наши риэлторы имеют богатый опыт работы на рынке недвижимости и всегда готовы предоставить вам квалифицированную помощь.</SP>
                </SDivContent>
                <SDivImage photoUrl={experience}/>
            </SDivAdvantage>
            <SDivAdvantage>
                <SDivImage photoUrl={individual}/>
                <SDivContent>
                    <SH2>Индивидуальный подход</SH2>
                    <SP>Мы предлагаем индивидуальный подход к каждому клиенту и учитываем все его потребности и пожелания.</SP>
                </SDivContent>
            </SDivAdvantage>
            <SDivAdvantage>
                <SDivContent>
                    <SH2>Прозрачность и честность</SH2>
                    <SP>Мы работаем открыто и прозрачно, предоставляя клиентам всю необходимую информацию и поддерживая их на каждом этапе сделки.</SP>
                </SDivContent>
                <SDivImage photoUrl={honesty}/>
            </SDivAdvantage>
            <SDivAdvantage>
                <SDivImage photoUrl={security}/>
                <SDivContent>
                    <SH2>Гарантия безопасности</SH2>
                    <SP>Мы гарантируем юридическую чистоту сделки и полную безопасность для наших клиентов.</SP>
                </SDivContent>
            </SDivAdvantage>
        </SDivAdvantages>
    </SSection>
  );
};

export default Advantages;