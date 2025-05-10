import React, { useEffect, useState } from "react";
import { addNotificationLeadClient } from "../../utils/ApiFunctions";
import { ModalOverlay, ModalContent, SButton, SForm, SFormData, 
    SInput, SDivInput, SLabel, CloseButton, SFormGroup, STextarea } from './styled';

const ModalNotificationLead = ({onClose, leadId}) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [notificationObject, setNotificationObject] = useState({
        name: "",
        notification: ""
    })
    
    const handleInputChangeNotification = (e) => {
      setNotificationObject({ ...notificationObject, [e.target.name]: e.target.value })
    }

    const handleButtonClick = () => {
      addNotificationFunc();
      onClose();
    };

    const addNotificationFunc = async (e) => {
        try {
            const result = await addNotificationLeadClient(leadId, notificationObject);
            setSuccessMessage("Уведомление успешно отправлено");
            setNotificationObject({
                name: "",
                notification: ""
            });
        } catch (error) {
            setErrorMessage("Ошибка при отправлении уведомления");
        }
    }

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={() => {onClose()}}>&times;</CloseButton>
                <SForm>
                    <SFormData>
                        <SDivInput>
                            <SLabel htmlFor="name">Название</SLabel>
                            <SInput type="text" id="name" name="name" placeholder="Введите название" value={notificationObject.name} onChange={handleInputChangeNotification}/>
                        </SDivInput>
                        <SFormGroup>
                            <SLabel for="notification">Уведомление</SLabel>
                            <STextarea type="text" id="notification" name="notification" placeholder="Введите текст уведомления" value={notificationObject.description} onChange={handleInputChangeNotification} />
                        </SFormGroup>
                        <SButton onClick={() => handleButtonClick()}>Отправить</SButton>
                    </SFormData>
                </SForm>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ModalNotificationLead;