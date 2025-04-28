import React, {useState} from 'react';
import { SSection, SForm, SInput, SButton, SH1, SText, STextArea } from './styled';
import { addCallRequest } from '../../utils/ApiFunctions';      


const RequestFormContacts = () => {

  const [callRequest, setCallRequest] = useState({
    name: "",
    phoneNumber: ""
  })

  const handleInputChange = (e) => {
    setCallRequest({ ...callRequest, [e.target.name]: e.target.value })
  }

  const handleAddCallRequest = async (e) => {
    e.preventDefault()
    try {
      const result = await addCallRequest(callRequest)
      setSuccessMessage("Заявка на звонок успешно отправлена")
      setErrorMessage("")
      setCallRequest({ 
        name: "",
        phoneNumber: ""
      })
    } catch (error) {
      setSuccessMessage("")
      setErrorMessage(`Ошибка отправления заявки: ${error.message}`)
    }
    setTimeout(() => {
      setErrorMessage("")
      setSuccessMessage("")
    }, 5000)
  }

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  return (
    <SSection>
      <SH1>
        Свяжитесь с нами
      </SH1>
      <SText>Мы всегда рады помочь вам найти дом вашей мечты или продать вашу нынешнюю недвижимость.</SText>
      <SForm onSubmit={handleAddCallRequest} action="#">
        <SInput type="text" id="name" name="name" placeholder="Имя" value={callRequest.name} onChange={handleInputChange}/>
        <SInput type="tel" id="phoneNumber" name="phoneNumber" placeholder="Телефон" value={callRequest.phoneNumber} onChange={handleInputChange}/>
        <SButton type="submit">Отправить</SButton>
      </SForm>
    </SSection>
  );
};

export default RequestFormContacts;