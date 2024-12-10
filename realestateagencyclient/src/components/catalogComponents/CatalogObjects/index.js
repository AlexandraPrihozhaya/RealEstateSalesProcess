import React from 'react';
import { SCard, SCardImage, SCardContent, SCardTitle, SCardDetails, SCardPrice, SSpan, SP } from './styled';
import photo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/noimage.png"

const CatalogObjects = ({ object }) => { 

  const backgroundImage = object.pictures.length > 0
  ? `data:image/jpeg;base64,${object.pictures[0].photo}`
  : photo;

  return (

            <SCard key={object.id}>
              <SCardImage img={backgroundImage}>
              </SCardImage>
              <SCardContent>
                <SCardTitle to={`/catalog/${object.id}`}>{object.name}</SCardTitle>
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
