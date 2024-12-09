import React from 'react';
import { SCard, SCardImage, SCardContent, SCardTitle, SCardDetails, SCardPrice, SSpan, SP } from './styled';

const CatalogObjects = ({ object }) => { 
  return (

            <SCard key={object.id}>
              <SCardImage></SCardImage>
              <SCardContent>
                <SCardTitle to={'/'}>{object.name}</SCardTitle>
                <SCardDetails>
                  <SP>{object.address}</SP>
                  <SP>Площадь: {object.square} кв.м.</SP>
                  <SP>Этаж: {object.floor}</SP>
                  <SP>Комнат: {object.numberOfRooms}</SP>
                </SCardDetails>
                <SCardPrice>{object.price} руб. / <SSpan>{ Math.round(object.price/3.33)} USD</SSpan></SCardPrice>
              </SCardContent>
            </SCard>

  );
};

export default CatalogObjects;
