import React, { useEffect, useState } from "react";
import { SSection, SForm, SInput, SLabel, SButton, SDiv, SDivPicture, SDivInput } from './styled';
import { changeLeadClientAccount, getLeadClientByEmail } from '../../utils/ApiFunctions';

const UserInfoProfile = () => {

    const userId = localStorage.getItem("userId");

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [clientEmailToChange, setClientEmailToChange] = useState(null);
    const [clientInfo, setClientInfo] = useState("");
    const [client, setClient] = useState({
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
      fetchClient();
    }, []);
  
    const fetchClient = async () => {
      try {
        const clientData = await getLeadClientByEmail(userId);
        if (clientData == null)
            setClientInfo(clientData);
        else {setClient(clientData);
            setEditing({
              secondName: clientData.secondName,
              firstName: clientData.firstName,
              patronymic: clientData.patronymic,
              phoneNumber: clientData.phoneNumber
            });
            setClientEmailToChange(userId);
        }
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
        const result = await changeLeadClientAccount(clientEmailToChange, editing);
        setSuccessMessage("Вы успешно отредактировали клиента");
        fetchClient();
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
                {clientInfo == null ? (
                    <SForm>
                        <SDivInput>
                            <SLabel htmlFor="email">Email</SLabel>
                            <SInput disabled type="email" id="email" value={userId} readOnly />
                        </SDivInput>
                    </SForm>
                ) : (
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
                 )}
            </SDiv>
            <SDivPicture />
        </SSection>
    );
  };

  export default UserInfoProfile;