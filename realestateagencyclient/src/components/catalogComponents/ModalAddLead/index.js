import React, { useEffect, useState } from "react";
import { addLeadClient  } from "../../utils/ApiFunctions";
import { SModal, SModalContent, SButton, SForm, SFormData, SInput, SDivInput, SLabel } from './styled';

const ModalAddLead = ({onClose, onLeadAdded}) => {

    const userId = localStorage.getItem("userId");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [lead, setLead] = useState({
        secondName: "",
        firstName: "",
        patronymic: "",
        phoneNumber: ""
    })
    
    const handleInputChangeLead = (e) => {
      setLead({ ...lead, [e.target.name]: e.target.value })
    }

    const handleButtonClick = (objectId) => {
      addLead();
      onClose();
    };

    const addLead = async (e) => {
        try {
            const result = await addLeadClient(userId, lead);
            setSuccessMessage("Потенциальный клиент успешно добавлен");
            setLead({
                secondName: "",
                firstName: "",
                patronymic: "",
                phoneNumber: ""
            });
            onLeadAdded(); // Уведомляем родительский компонент о том, что лид добавлен
        } catch (error) {
            setErrorMessage("Ошибка при добавлении потенциального клиента");
        }
    }

    return (
        <SModal>
            <SModalContent>
            <p>Пожалуйста, введите данные</p>
                <SForm>
                <SFormData>
                    <SDivInput>
                        <SLabel htmlFor="secondName">Фамилия</SLabel>
                        <SInput type="text" id="secondName" name="secondName" placeholder="Введите фамилию" value={lead.secondName} onChange={handleInputChangeLead}/>
                      </SDivInput>
                      <SDivInput>
                        <SLabel htmlFor="firstName">Имя</SLabel>
                        <SInput type="text" id="firstName" name="firstName" placeholder="Введите имя" value={lead.firstName} onChange={handleInputChangeLead}/>
                      </SDivInput>
                      <SDivInput>
                        <SLabel htmlFor="patronymic">Отчество</SLabel>
                        <SInput type="text" id="patronymic" name="patronymic" placeholder="Введите отчество" value={lead.patronymic} onChange={handleInputChangeLead}/>
                      </SDivInput>
                      <SDivInput>
                        <SLabel htmlFor="phoneNumber">Телефон</SLabel>
                        <SInput type="tel" id="phoneNumber" name="phoneNumber" placeholder="Введите телефон" value={lead.phoneNumber} onChange={handleInputChangeLead}/>
                      </SDivInput>
                      <SButton onClick={() => handleButtonClick()}>Подтвердить</SButton>
                    </SFormData>
                </SForm>
            </SModalContent>
        </SModal>
    );
};

export default ModalAddLead;