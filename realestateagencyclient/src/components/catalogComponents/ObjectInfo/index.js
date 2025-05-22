import React, { useEffect, useState } from "react";
import { getObjectById, addToFavorites, isInFavorites, addRequest, getLeadClientByEmail, addNotification } from "../../utils/ApiFunctions";
import { useParams } from "react-router-dom";
import { SSection, ImageSlider, SDivContainer, SDivInfo, SMainImg, SImg, SH1, SP, SFaMapMarkerAlt, SMdOutlineAttachMoney,
  SFaSquareArrowUpRight, SRiNumbersFill, SPiBuildingApartmentFill, SFaBuildingCircleCheck, SButton, SText, SDivFav } from './styled';
import { AiFillHeart } from "react-icons/ai";
import Modal from '../Modal';
import ModalAddLead from "../ModalAddLead";
import MapBlock from "../../blockAboutComponents/MapBlock";

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

  const [notificationObject] = useState({
    name: "Заявка подана",
    notification: "Вы успешно подали заявку на покупку объекта недвижимости"
  });

  const { objectId } = useParams();
  const [selectedImg, setSelectedImg] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [showModal, setShowModal] = useState(false);
  const userId = localStorage.getItem("userId");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalAddLead, setShowModalAddLead] = useState(false);

  // Для полноэкранного просмотра
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

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

      // Проверка в избранном
      const inFavorites = await isInFavorites(userId, userData.id);
      if (inFavorites) {
        setFavorites((prev) => new Set(prev).add(userData.id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleFavorite = async () => {
    if (!userId) {
      setShowModal(true);
      return;
    }

    const success = await addToFavorites(userId, object.id);
    if (success) {
      setFavorites((prev) => {
        const newFavs = new Set(prev);
        if (newFavs.has(object.id)) {
          newFavs.delete(object.id);
        } else {
          newFavs.add(object.id);
        }
        return newFavs;
      });
    }
  };

  const buyObject = async () => {
    try {
      const clientData = await getLeadClientByEmail(userId);

      if (!userId) {
        setShowModal(true);
      } else {
        if (clientData == null) {
          setShowModalAddLead(true);
        } else {
          await addRequest(userId, objectId);
          await addNotification(userId, notificationObject);
          setSuccessMessage("Вы успешно подали заявку на покупку объекта недвижимости");
          setShowModalSuccess(true);
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data === "Такая заявка уже есть") {
          setShowModalInfo(true);
        } else {
          setErrorMessage("Ошибка при добавлении заявки на покупку объекта недвижимости");
        }
      } else {
        setErrorMessage("Ошибка при добавлении заявки на покупку объекта недвижимости");
      }
    }
  };

  // Обработчик клика по изображению
  const handleImgClick = (img) => {
    setSelectedImg(img);
  };

  const handleImgClickFullScrrenOpen = (img) => {
    setIsFullScreenOpen(true);
  };

  // Обработчик закрытия полноэкранного просмотра
  const handleCloseFullScreen = () => {
    setIsFullScreenOpen(false);
  };

  return (
<>
<SSection>

<SDivContainer>
{selectedImg && (
   <SMainImg
     img={`data:image/jpeg;base64,${selectedImg}`}
     alt="Выбранное изображение"
     style={{ cursor: 'pointer' }}
     onClick={() => handleImgClickFullScrrenOpen(selectedImg)}
   />
)}
<SDivInfo>
<SH1>{object.name}</SH1>
<SP><SMdOutlineAttachMoney /> {object.price} USD / { Math.round(object.price*3.33)} руб.</SP>
          <SP><SFaMapMarkerAlt /> {object.address}</SP>
          <SP><SFaSquareArrowUpRight /> {object.square} м2</SP>
          <SP><SRiNumbersFill /> Количество комнат: {object.numberOfRooms}</SP>
          <SP><SPiBuildingApartmentFill /> {object.floor} этаж</SP>
          <SP><SFaBuildingCircleCheck /> {object.yearOfConstruction} год постройки</SP>

<SDivFav 
 onClick={toggleFavorite} 
 style={{
   cursor:'pointer',
   color:favorites.has(object.id)? '#ff8a00':'#ffffff',
   fontSize:'30px'
 }}
>
<AiFillHeart />
</SDivFav>

<SButton onClick={buyObject}>Купить</SButton>
</SDivInfo>
</SDivContainer>

{/* Галерея изображений */}
{object.pictures.length >0 && (
 <ImageSlider>
   {object.pictures.map((img,index)=>(
     <SImg
       key={index}
       src={`data:image/jpeg;base64,${img}`}
       alt={`Изображение ${index+1}`}
       onClick={() => handleImgClick(img)}
       style={{ cursor:'pointer' }}
     />
   ))}
 </ImageSlider>
)}

<SP>Описание</SP>
<SText>{object.description}</SText>

<MapBlock address={object.address} />

{/* Модальные окна */}
{showModal && (
 <Modal message="Пожалуйста, авторизуйтесь для выполнения данного действия" onClose={() => setShowModal(false)} />
)}
{showModalSuccess && (
 <Modal message="Вы успешно подали заявку на покупку недвижимости" onClose={() => setShowModalSuccess(false)} />
)}
{showModalInfo && (
 <Modal message="Вы уже подали заявку на покупку данного объекта" onClose={() => setShowModalInfo(false)} />
)}
{showModalAddLead && (
 <ModalAddLead
   onClose={() => setShowModalAddLead(false)}
   onLeadAdded={async () => {
     await addRequest(userId, objectId);
     await addNotification(userId, notificationObject);
     setSuccessMessage("Вы успешно подали заявку на покупку объекта недвижимости");
     setShowModalSuccess(true);
     setShowModalAddLead(false); 
   }}
 />
)}

{/* Полноэкранный просмотр изображения */}
{isFullScreenOpen && (
 <div style={{
   position:'fixed',
   top:'0',
   left:'0',
   width:'100%',
   height:'100%',
   backgroundColor:'rgba(0,0,0,.8)',
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   zIndex:'9999'
 }} onClick={handleCloseFullScreen}>
   <img src={`data:image/jpeg;base64,${selectedImg}`} alt="Полноэкранное изображение" style={{ maxWidth:'90%', maxHeight:'90%' }} />
 </div>
)}

</SSection>
</>
)
};

export default ObjectInfo;