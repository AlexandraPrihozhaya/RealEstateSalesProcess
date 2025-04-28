import React, {useEffect, useState} from 'react';
import { SSection, SForm, SFormData, SInput, SButton, SH1, SH2,
  SFormGroup, SLabel, SSelect, SFormInput, SOption, STextarea, SFormDiv, SDivInput } from './styled';
import { getAllDistricts, getAllMicroDistricts, addLeadClient, addObject, getLeadClientByEmail } from '../../utils/ApiFunctions';  


const SellForm = () => {

  const userEmail = localStorage.getItem("userId")


  const [object, setObject] = useState({
    name: "",
    type: "",
    price: "",
    address: "",
    square: "",
    numberOfRooms: "",
    floor: "",
    yearOfConstruction: "",
    description: "",
    microDistrict: {id: "", name: ""}
  })

  const handleInputChange = (e) => {
    setObject({ ...object, [e.target.name]: e.target.value })
  }

  const [lead, setLead] = useState({
    secondName: "",
    firstName: "",
    patronymic: "",
    phoneNumber: ""
  })

  const handleInputChangeLead = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value })
  }

  const [clientInfo, setClientInfo] = useState("");

  useEffect(() => {
    fetchClient();
  }, []);

  const fetchClient = async () => {
    try {
        const clientData = await getLeadClientByEmail(userEmail);
        if (clientData == null) {
            setClientInfo(clientData);
        } else { 
            setLead(clientData);
        }
    } catch (error) {
      console.error(error);
    }
  };


  const handleAddObject = async (e) => {
    e.preventDefault()
    try {
      if (clientInfo == null) {
        const result = await addLeadClient(userEmail, lead);
      }
      const result1 = await addObject(userEmail, object);
      setSuccessMessage("Вы успешно добавили объект недвижимости");
      setErrorMessage("");
      setObject({ 
        name: "",
        type: "",
        price: "",
        address: "",
        square: "",
        numberOfRooms: "",
        floor: "",
        yearOfConstruction: "",
        description: "",
        microDistrict: {id: "", name: ""} })
        setLead({
            secondName: "",
            firstName: "",
            patronymic: "",
            phoneNumber: ""
        })
        setSelectedDistrict("all")
        setSelectedMicroDistrict("all")
    } catch (error) {
      setSuccessMessage("")
      setErrorMessage(`Ошибка добавления: ${error.message}`)
    }
    setTimeout(() => {
      setErrorMessage("")
      setSuccessMessage("")
    }, 5000)
  }

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [districts, setDistricts] = useState([]);
  const [microDistricts, setMicroDistricts] = useState([]);

  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedMicroDistrict, setSelectedMicroDistrict] = useState('all');

  const fetchDistricts = async () => {
    try {
        const result = await getAllDistricts();
        setDistricts(result);
    } catch (error) {
        setErrorMessage(error.message);
    }
};

const fetchMicroDistricts = async () => {
    try {
        const result = await getAllMicroDistricts();
        setMicroDistricts(result);
    } catch (error) {
        setErrorMessage(error.message);
    }
};

useEffect(() => {
  fetchDistricts();
  fetchMicroDistricts();
}, []);


const handleSelectedDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
};

const handleSelectedMicroDistrictChange = (e) => {
    const selectedId = e.target.value;
    setSelectedMicroDistrict(selectedId);
    
    const selMicroDistrict = microDistricts.find(microDistrict => microDistrict.id == selectedId);
    if (selMicroDistrict) {
        setObject(prevState => ({
            ...prevState,
            microDistrict: {
                ...prevState.microDistrict,
                id: selMicroDistrict.id,
                name: selMicroDistrict.name,
            }
        }));
    } else {
        setObject(prevState => ({
            ...prevState,
            microDistrict: {
                ...prevState.microDistrict,
                id: "",
                name: "",
            }
        }));
    }
};

useEffect(() => {
    console.log(object.microDistrict);
  }, [object.microDistrict]);

  return (
    <SSection>
      <SH1>
        Добавьте объявление о продаже недвижимости
      </SH1>
      <SForm onSubmit={handleAddObject} action="#">
      <SFormDiv>
                    <SFormGroup>
                        <SLabel for="type">Тип недвижимости</SLabel>
                        <SSelect id="type" name="type" value={object.type} onChange={handleInputChange}>
                            <SOption value="all">Все</SOption>
                            <SOption value="Квартира">Квартира</SOption>
                            <SOption value="Дом">Дом</SOption>
                            <SOption value="Участок">Участок</SOption>
                            <SOption value="Комната">Комната</SOption>
                        </SSelect>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="name">Название</SLabel>
                        <SFormInput>
                            <SInput type="text" id="name" name="name" placeholder="Введите название" value={object.name} onChange={handleInputChange} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="district">Район</SLabel>
                        <SSelect id="district" name="district" value={selectedDistrict} onChange={handleSelectedDistrictChange}>
                            <SOption value="all">Все</SOption>
                            {districts.map(district => (
                                <SOption key={district.id} value={district.id}>
                                    {district.name}
                                </SOption>
                            ))}
                        </SSelect>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="microDistrict">Микрорайон</SLabel>
                        <SSelect id="microDistrict" name="microDistrict" value={selectedMicroDistrict} onChange={handleSelectedMicroDistrictChange}>
                            <SOption value="all">Все</SOption>
                            {microDistricts.filter(microDistrict => selectedDistrict === 'all' || microDistrict.district.id == selectedDistrict)
                                .map(microDistrict => (
                                    <SOption key={microDistrict.id} value={microDistrict.id}>
                                        {microDistrict.name}
                                    </SOption>
                                ))}
                        </SSelect>
                    </SFormGroup>
                    
                    <SFormGroup>
                        <SLabel for="floor">Этаж</SLabel>
                        <SFormInput>
                            <SInput type="number" id="floor" name="floor" placeholder="Введите этаж" value={object.floor} onChange={handleInputChange} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="numberOfRooms">Количество комнат</SLabel>
                        <SFormInput>
                        <SInput type="number" id="numberOfRooms" name="numberOfRooms" placeholder="Введите число комнат" value={object.numberOfRooms} onChange={handleInputChange} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="square">Площадь (кв.м.)</SLabel>
                        <SFormInput>
                            <SInput type="number" id="square" name="square" placeholder="Введите площадь" value={object.square} onChange={handleInputChange} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="address">Адрес</SLabel>
                        <SFormInput>
                            <SInput type="text" id="address" name="address" placeholder="Введите адрес" value={object.address} onChange={handleInputChange} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                    <SLabel for="yearOfConstruction">Год постройки</SLabel>
                        <SFormInput>
                            <SInput type="number" id="yearOfConstruction" name="yearOfConstruction" placeholder="Введите год постройки" value={object.yearOfConstruction} onChange={handleInputChange} />
                        </SFormInput>
                    </SFormGroup>
                    <SFormGroup>
                        <SLabel for="price">Цена (в у.е.)</SLabel>
                        <SFormInput>
                            <SInput type="number" id="price" name="price" placeholder="Введите цену" value={object.price} onChange={handleInputChange} />
                        </SFormInput>
                    </SFormGroup>
                  </SFormDiv>
                  <SFormGroup>
                        <SLabel for="description">Описание</SLabel>
                        <STextarea type="number" id="description" name="description" placeholder="Введите описание" value={object.description} onChange={handleInputChange} />
                    </SFormGroup>
                    <SH2>Оставьте свои данные</SH2> 
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

                        <SButton type="submit">Отправить</SButton>
                    </SFormData>
                </SForm>

    </SSection>
  );
};

export default SellForm;