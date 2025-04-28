import React, { useEffect, useState } from "react";
import { SSection, SPaginationContainer, SDivPages, SDivCount, 
    SDivList, SText, SSelect, SOption, SButton, 
    SCard, SCardContainer, SCardContent, SCardTitle, SCardType, SCardDetails, SDivText, SImg,
    CustomPrevButton, CustomNextButton, StyledSwiperPagination } from './styled';
import { getLeadClientByEmail } from '../../utils/ApiFunctions';
import { GrPrevious, GrNext } from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import photo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/noimage.png"

const UserAds = () => {
    const userId = localStorage.getItem("userId");

    const [clientInfo, setClientInfo] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetchAds();
    }, []);
    
    const fetchAds = async () => {
        try {
            const clientData = await getLeadClientByEmail(userId);
            setClientInfo(clientData);
            setAds(clientData.realEstateObjects);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message)
            setIsLoading(false)
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const totalPages = Math.ceil(ads.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        }
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1); 
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = ads.slice(startIndex, endIndex);

    if (clientInfo == null || ads.length === 0) {
        return <SDivText>Нет объявлений для отображения</SDivText>;
    }

    return (
        <SSection>
            <div>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>Ошибка выполнения запроса</p>}
            </div>
            {isLoading ? (
                <text>Загрузка данных...</text>
            ) : (
                <>
                    <SPaginationContainer>
                        <SDivPages>
                            <SText>Объектов на странице:</SText>
                            <SSelect value={itemsPerPage} onChange={handleItemsPerPageChange}>
                                <SOption value="3">3</SOption>
                                <SOption value="6">6</SOption>
                                <SOption value="9">9</SOption>
                                <SOption value="12">12</SOption>
                            </SSelect>
                        </SDivPages>
                        <SDivCount>Страница {currentPage} из {totalPages}</SDivCount>
                        <SDivList>
                            <SButton onClick={handlePrevPage}><GrPrevious /></SButton>
                            <SButton onClick={handleNextPage}><GrNext /></SButton>
                        </SDivList>
                    </SPaginationContainer>
                    
                    <SCardContainer>
                        {pageData.map((object) => (
                            <SCard key={object.id}>
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
                                    <SCardTitle>{object.name}</SCardTitle>
                                    <SCardType>{object.type}</SCardType>
                                    <SCardDetails>
                                        <p>Цена: {object.price}</p>

                                        <p>Площадь: {object.square} м²</p>
                                        <p>Адрес: {object.address}</p>
                                        <p>Год постройки: {object.yearOfConstruction}</p>
                                    </SCardDetails>
                                </SCardContent>
                            </SCard>
                        ))}
                    </SCardContainer>
                </>
            )}
        </SSection>
    );
  };

  export default UserAds;