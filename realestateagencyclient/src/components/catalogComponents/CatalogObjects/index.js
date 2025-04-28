import React, { useState } from 'react';
import { SCard, SCardContent, SCardTitle, SCardDetails, SCardPrice, SSpan, SP, SImg,
  CustomPrevButton, CustomNextButton, StyledSwiperPagination, SDivFav, SCardDiv } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { AiFillHeart } from "react-icons/ai";
import photo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/noimage.png"
import { addToFavorites } from '../../utils/ApiFunctions';

const CatalogObjects = ({ object }) => { 
    const backgroundImage = object.pictures.length > 0 
        ? `data:image/jpeg;base64,${object.pictures[0].photo}` 
        : photo;

    const [favorites, setFavorites] = useState(new Set());
    const userId = localStorage.getItem("userId");

    const toggleFavorite = async (objectId) => {
        const success = await addToFavorites(userId, object);
        if (success) {
            setFavorites((prevFavorites) => {
                const newFavorites = new Set(prevFavorites);
                if (newFavorites.has(objectId)) {
                    newFavorites.delete(objectId);
                } else {
                    newFavorites.add(objectId);
                }
                return newFavorites;
            });
        }
    };

    return (
        <SCard key={object.id}>
            <SCardDiv style={{ position: 'relative' }}>
                <SDivFav 
                    onClick={() => toggleFavorite(object.id)} 
                    style={{
                        position: 'absolute',
                        top: '5px',
                        right: '10px',
                        cursor: 'pointer',
                        color: favorites.has(object.id) ? '#ff8a00' : '#fff', // Красный, если в избранном, иначе белый
                        fontSize: '30px',
                        zIndex: 10, 
                    }}
                >
                    <AiFillHeart />
                </SDivFav>
                {object.pictures && object.pictures.length > 0 ? (
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
                            {object.pictures.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <SImg
                                        src={`data:image/jpeg;base64,${img.photo}`} 
                                        alt={`Изображение ${index + 1}`}
                                        style={{ width: '100%', height: '230px' }} 
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
                        style={{ width: '100%', height: '230px' }} 
                    />
                )}
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
            </SCardDiv>
        </SCard>
    );
};

export default CatalogObjects;