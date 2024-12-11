import React, { useEffect, useState } from "react";
import { getObjectById } from "../../utils/ApiFunctions";
import { useParams } from "react-router-dom";
import { SSection, ImageSlider, SDivContainer, SDivInfo, SMainImg, SImg, SH1, SP, SFaMapMarkerAlt, SMdOutlineAttachMoney,
  SFaSquareArrowUpRight, SRiNumbersFill, SPiBuildingApartmentFill, SFaBuildingCircleCheck, SButton, SText} from './styled';

const ObjectInfo = () => {
  const [object, setObject] = useState({
    id: "",
    name: "",
    type: "",
    price: 0,
    address: "",
    square: 0,
    numberOfRooms: 0,
    floor: 0,
    yearOfConstruction: 0,
    description: "",
    microDistrict: { id: "", name: "", district: { id: "", name: "" } },
    pictures: []
  });

  const { objectId } = useParams();
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    fetchObject();
  }, []);

  const fetchObject = async () => {
    try {
      const userData = await getObjectById(objectId);
      setObject(userData);
      
      if (userData.pictures.length > 0) {
        setSelectedImg(userData.pictures[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImgClick = (img) => {
    setSelectedImg(img);
  };

  return (
    <SSection>
      <SDivContainer>
      {selectedImg && ( 
          <SMainImg
            img={`data:image/jpeg;base64,${selectedImg}`} 
            alt="Выбранное изображение"
          />
        )}
        <SDivInfo className="info">
          <SH1>{object.name}</SH1>
          <SP><SMdOutlineAttachMoney /> {object.price} руб. / { Math.round(object.price/3.33)} USD</SP>
          <SP><SFaMapMarkerAlt /> {object.address}</SP>
          <SP><SFaSquareArrowUpRight /> {object.square} м2</SP>
          <SP><SRiNumbersFill /> Количество комнат: {object.numberOfRooms}</SP>
          <SP><SPiBuildingApartmentFill /> {object.floor} этаж</SP>
          <SP><SFaBuildingCircleCheck /> {object.yearOfConstruction} год постройки</SP>
          <SButton>Купить</SButton>
        </SDivInfo>
      </SDivContainer>
      {object.pictures.length > 0 && (
        <ImageSlider>
          {object.pictures.map((img, index) => (
            <SImg
              key={index}
              src={`data:image/jpeg;base64,${img}`} 
              alt={`Изображение ${index + 1}`} 
              onClick={() => handleImgClick(img)} 
            />
          ))}
        </ImageSlider>
      )}
      <SP>Описание</SP>
      <SText>{object.description}</SText>
    </SSection>
  );
};

export default ObjectInfo;