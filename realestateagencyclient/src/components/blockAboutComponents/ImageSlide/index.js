import React from 'react';
import { SSection, SCard, STitle, SIcon, SInfo, SUl, SLi } from './styled';
import { GiHouse, GiHeartKey } from "react-icons/gi";
import { PiLockKeyOpen } from "react-icons/pi";


const ImageSlide = () => {
    return (
        <SSection>
            <SCard>
            <STitle>
            Дом вашей мечты
            </STitle>
            <SIcon><GiHouse /></SIcon>
            <SInfo>
            <SUl>
            <SLi>Помощь в покупке и продаже квартир, домов, коттеджей</SLi>
            <SLi>Широкая база объектов на любой вкус и бюджет</SLi>
            <SLi>Опытные специалисты с индивидуальным подходом</SLi>
            </SUl>
            </SInfo>
            </SCard>
            
            <SCard>
            <STitle>
            Ключ от счастья
            </STitle>
            <SIcon><GiHeartKey /></SIcon>
            <SInfo>
            <SUl>
            <SLi>Полный спектр риэлторских услуг для частных лиц и организаций</SLi>
            <SLi>Проверенные объекты с чистой юридической историей</SLi>
            <SLi>Бесплатные консультации и оценка недвижимости</SLi>
            </SUl>
            </SInfo>
            </SCard>
            
            <SCard>
            <STitle>
            Доступное жилье
            </STitle>
            <SIcon><PiLockKeyOpen /></SIcon>
            <SInfo>
            <SUl>
            <SLi>Помогаем приобрести недвижимость даже тем, кто не имеет собственного капитала</SLi>
            <SLi>Специализируемся на сделках с использованием ипотечных кредитов и государственных субсидий</SLi>
            <SLi>Сопровождаем сделки от начала до получения ключей</SLi>
            </SUl>
            </SInfo>
            </SCard>
         
      
      </SSection>
    );
};

export default ImageSlide;