import React, { useEffect, useState } from "react";
import { SSection, SForm, SInput, SLabel, SButton, SDiv, SDivPicture, SDivInput } from './styled';
import { changeRealtorAccount, getRealtorByEmail } from '../../utils/ApiFunctions';

const RealtorAccountBlock = () => {
  const userId = localStorage.getItem("userId");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [realtorEmailToChange, setRealtorEmailToChange] = useState(null);
  const [realtor, setRealtor] = useState({
    id: "",
    secondName: "",
    firstName: "",
    patronymic: "",
    phoneNumber: "",
    user: { id: "", email: "" }
  });

  const [editing, setEditing] = useState({
    secondName: "",
    firstName: "",
    patronymic: "",
    phoneNumber: ""
  });

  useEffect(() => {
    fetchRealtor();
  }, []);

  const fetchRealtor = async () => {
    try {
      const realtorData = await getRealtorByEmail(userId);
      setRealtor(realtorData);
      setEditing({
        secondName: realtorData.secondName,
        firstName: realtorData.firstName,
        patronymic: realtorData.patronymic,
        phoneNumber: realtorData.phoneNumber
      });
      setRealtorEmailToChange(userId);
    } catch (error) {
      console.error(error);
    }
  };



  const handleInputChangeEditing = (e) => {
    setEditing({ ...editing, [e.target.name]: e.target.value });
  };

  const handleConfirmEditing = async (e) => {
    e.preventDefault();
    try {
      const result = await changeRealtorAccount(realtorEmailToChange, editing);
      setSuccessMessage("Вы успешно отредактировали риэлтора");
      fetchRealtor();
      setErrorMessage("");
      // Обнуление значения формы
      setEditing({ secondName: "", firstName: "", patronymic: "", phoneNumber: "" });
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage(`Ошибка изменения: ${error.message}`);
    }
    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <SSection>
      <SDiv>
        <SForm>
          <SDivInput>
            <SLabel htmlFor="lastName">Фамилия</SLabel>
            <SInput type="text" id="lastName" name="secondName" value={editing.secondName} onChange={handleInputChangeEditing} />
          </SDivInput>
          <SDivInput>
            <SLabel htmlFor="firstName">Имя</SLabel>
            <SInput type="text" id="firstName" name="firstName" value={editing.firstName} onChange={handleInputChangeEditing} />
          </SDivInput>
          <SDivInput>
            <SLabel htmlFor="middleName">Отчество</SLabel>
            <SInput type="text" id="middleName" name="patronymic" value={editing.patronymic} onChange={handleInputChangeEditing} />
          </SDivInput>
          <SDivInput>
            <SLabel htmlFor="email">Email</SLabel>
            <SInput disabled="true" type="email" id="email" value={userId} readOnly />
          </SDivInput>
          <SDivInput>
            <SLabel htmlFor="phone">Телефон</SLabel>
            <SInput type="tel" id="phone" name="phoneNumber" value={editing.phoneNumber} onChange={handleInputChangeEditing} />
          </SDivInput>
          <SButton onClick={handleConfirmEditing}>Сохранить</SButton>
        </SForm>
      </SDiv>
      <SDivPicture />
    </SSection>
  );
};

export default RealtorAccountBlock;