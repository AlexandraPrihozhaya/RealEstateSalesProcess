import React from 'react';
import { ModalOverlay, ModalContent, CloseButton, StyledSwiperPagination,
    SImg, CustomPrevButton, CustomNextButton, SCardContent, SCardDetails, SCardPrice, SCardTitle, SP } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import photo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/noimage.png"

const ModalObject = ({ onClose, realEstateObject }) => {

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <SCardContent>
                    <SCardTitle>{realEstateObject.name}</SCardTitle>
                    {realEstateObject.pictures && realEstateObject.pictures.length > 0 ? (
                            <StyledSwiperPagination>
                                <Swiper
                                    navigation={{
                                        nextEl: '.custom-next',
                                        prevEl: '.custom-prev',
                                    }}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation, Pagination]}
                                    style={{ width: '100%', height: 'auto' }}
                                >
                                    {realEstateObject.pictures.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <SImg
                                                src={`data:image/jpeg;base64,${img.photo}`} 
                                                alt={`Изображение ${index + 1}`}
                                                style={{ width: '100%', height: '260px' }} 
                                            />
                                        </SwiperSlide>
                                    ))}
                                    <CustomPrevButton className="custom-prev">
                                        &#10094; 
                                    </CustomPrevButton>
                                    <CustomNextButton className="custom-next">
                                        &#10095; 
                                    </CustomNextButton>
                                </Swiper>
                            </StyledSwiperPagination>
                        ) : (
                            <SImg
                                src={photo}
                                alt="Запасное изображение" 
                                style={{ width: '100%', height: '260px' }} 
                            />
                        )}
                    
                        
                            <SP>{realEstateObject.address}</SP>
                            <SP>Площадь: {realEstateObject.square} кв.м.</SP>
                            <SP>Этаж: {realEstateObject.floor}</SP>
                            <SP>Комнат: {realEstateObject.numberOfRooms}</SP>
                            <SP>Описание: {realEstateObject.description}/</SP>
                            <SCardPrice>{realEstateObject.price} USD / { Math.round(realEstateObject.price*3.33)} руб.</SCardPrice>
                        
                    </SCardContent>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ModalObject;