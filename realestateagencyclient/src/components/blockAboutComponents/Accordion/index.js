import React from 'react';

import { SAccordion,
    SAccordionItem,
    SAccordionItemHeading,
    SAccordionItemButton,
    SAccordionItemPanel } from './styled';

const Accordion = () => {
    return (
        <SAccordion>
            <SAccordionItem>
                <SAccordionItemHeading>
                    <SAccordionItemButton>
                        Какими услугами вы занимаетесь?
                    </SAccordionItemButton>
                </SAccordionItemHeading>
                <SAccordionItemPanel>
                    <p>
                        Мы предлагаем полный спектр услуг по недвижимости: покупка, 
                        продажа, аренда, оценка, юридическое сопровождение сделок.
                    </p>
                </SAccordionItemPanel>
            </SAccordionItem>
            <SAccordionItem>
                <SAccordionItemHeading>
                    <SAccordionItemButton>
                        Как узнать рыночную стоимость моей недвижимости?
                    </SAccordionItemButton>
                </SAccordionItemHeading>
                <SAccordionItemPanel>
                    <p>
                        Вы можете заказать бесплатную оценку на нашем сайте или связаться с нами по телефону.
                    </p>
                </SAccordionItemPanel>
            </SAccordionItem>
            <SAccordionItem>
                <SAccordionItemHeading>
                    <SAccordionItemButton>
                        Какие документы нужны для продажи квартиры?
                    </SAccordionItemButton>
                </SAccordionItemHeading>
                <SAccordionItemPanel>
                    <p>
                        Список необходимых документов вы можете найти на нашем сайте в разделе "Информация".
                    </p>
                </SAccordionItemPanel>
            </SAccordionItem>
            <SAccordionItem>
                <SAccordionItemHeading>
                    <SAccordionItemButton>
                        Что делать, если я не нашел нужную недвижимость?
                    </SAccordionItemButton>
                </SAccordionItemHeading>
                <SAccordionItemPanel>
                    <p>
                        Вы можете оставить заявку на поиск и мы сообщим вам, как только появится подходящий вариант.
                    </p>
                </SAccordionItemPanel>
            </SAccordionItem>
            
        </SAccordion>
    );
};

export default Accordion;

