import React from 'react';
import { SSection, SMapContainer, SMapOverlay, SMapText, 
    SMapTitle, SMapDescription, SMapList, SLi } from './styled';



const GeographyServices = () => {
  return (
    <SSection>
        <SMapContainer>
            <SMapOverlay>
            </SMapOverlay>
            <SMapText>
            <SMapTitle>География наших услуг</SMapTitle>
            <SMapDescription>Мы работаем по всему Минску!</SMapDescription>
            <SMapList>
                <SLi>Центральный</SLi>
                <SLi>Советский</SLi>
                <SLi>Первомайский</SLi>
                <SLi>Партизанский</SLi>
                <SLi>Заводской</SLi>
                <SLi>Ленинский</SLi>
                <SLi>Октябрьский</SLi>
                <SLi>Московский</SLi>
                <SLi>Фрунзенский</SLi>
                </SMapList>
            </SMapText>
        </SMapContainer>
    </SSection>
  );
};

export default GeographyServices;