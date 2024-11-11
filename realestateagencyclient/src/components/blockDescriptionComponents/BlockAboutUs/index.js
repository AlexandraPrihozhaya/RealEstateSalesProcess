import React from 'react';
import { SSection, SDivMain, SDiv1, SDiv2, SDiv3, SDivText, SH1, SText, SFaHandPointRight } from './styled';



const BlockAboutUs = () => {
  return (
    <SSection>
    <SDivMain>
        <SDiv1>
            <SDivText>
                <SH1>Адрес Успеха</SH1>
            </SDivText>
        </SDiv1>
        <SDiv2>
           <SDivText>
                <SText>
                    Адрес Успеха - это команда опытных и заботливых риэлторов, которые помогут вам реализовать мечту о собственном доме. Мы знаем рынок недвижимости как свои пять пальцев, и всегда готовы предложить вам наилучшие варианты по выгодной цене.
                </SText>
                <SText>
                    Мы оказываем полный спектр услуг:
                </SText>
                <SText>
                    <SFaHandPointRight /> Поиск и подбор недвижимости. Узнайте о ваших мечтах и предпочтениях, и мы подберем идеальный вариант, чтобы вы могли наслаждаться своей новой жизнью.
                </SText>
                <SText>
                    <SFaHandPointRight /> Юридическое сопровождение. Наши юристы проверят недвижимость на юридическую чистоту и обеспечат безопасность сделки.
                </SText>
                <SText>
                    <SFaHandPointRight /> Переговоры с продавцами. Мы ведем переговоры от вашего имени, чтобы вы получили лучшую цену и выгодные условия.
                </SText>
                <SText>
                    <SFaHandPointRight /> Оформление документов. Сбор и подготовка всех необходимых документов для быстрой и успешной сделки.
                </SText>
            </SDivText>     
        </SDiv2>
            <SDiv3></SDiv3>
        </SDivMain>
        </SSection>
  );
};

export default BlockAboutUs;