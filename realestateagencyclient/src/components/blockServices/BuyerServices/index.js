import React from 'react';
import { SSection, SH1, SButton, SPanel, SText } from './styled';
import { MdArrowRight } from "react-icons/md";
import { useState, useRef } from 'react';

const BuyerServices = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
  
    const button1Ref = useRef(null);
    const button2Ref = useRef(null);
    const button3Ref = useRef(null);
    const button4Ref = useRef(null);
  
    const toggleAccordion = (index) => {
      if (index === 1) {
        setIsOpen1(!isOpen1);
      } else if (index === 2) {
        setIsOpen2(!isOpen2);
      } else if (index === 3) {
        setIsOpen3(!isOpen3);
      } else if (index === 4) {
        setIsOpen4(!isOpen4);
      }
    };
  
    return (
      <SSection>
        <SH1>Покупателю</SH1>
  
        <SButton ref={button1Ref} onClick={() => toggleAccordion(1)}>
          <MdArrowRight /> Комплексный подход
        </SButton>
        <SPanel style={{ maxHeight: isOpen1 ? '100%' : '0' }}>
          <SText>
            Узнаем ваши потребности, предпочтения, бюджет и требования к недвижимости.
            Используем свою базу недвижимости и работаем с застройщиками, чтобы найти идеальный вариант для вас.
            Юристы агентства проведут комплексную проверку выбранного объекта на юридическую чистоту, чтобы гарантировать вам спокойствие и безопасность сделки.
          </SText>
        </SPanel>
  
        <SButton ref={button2Ref} onClick={() => toggleAccordion(2)}>
          <MdArrowRight /> Сопровождение сделки
        </SButton>
        <SPanel style={{ maxHeight: isOpen2 ? '100%' : '0' }}>
          <SText>
            Ведем переговоры с продавцом, фиксируем условия сделки в предварительном договоре, и обеспечиваем беспроблемную регистрацию вашей недвижимости.
            Помогаем решать все юридические вопросы, связанные с покупкой недвижимости.
            Организуем сбор и получение документов, подготовим договор купли-продажи и обеспечим оперативное получение пакета документов по вашей недвижимости.
          </SText>
        </SPanel>
  
        <SButton ref={button3Ref} onClick={() => toggleAccordion(3)}>
          <MdArrowRight /> Дополнительные услуги
        </SButton>
        <SPanel style={{ maxHeight: isOpen3 ? '100%' : '0' }}>
          <SText>
            Предоставляем консультации по финансовым вопросам и помогаем в подготовке документов для получения кредита, использования материнского капитала, приватизации и т.д.
            Обеспечиваем страхование сделки в БелГосСтрахе.
          </SText>
        </SPanel>

        <SButton ref={button4Ref} onClick={() => toggleAccordion(4)}>
          <MdArrowRight /> Гарантия результата
        </SButton>
        <SPanel style={{ maxHeight: isOpen4 ? '100%' : '0' }}>
          <SText>
            Вы получаете юридически чистую недвижимость в вашу собственность в соответствии с действующим законодательством.
          </SText>
        </SPanel>
      </SSection>
    );
  };
  
  export default BuyerServices;