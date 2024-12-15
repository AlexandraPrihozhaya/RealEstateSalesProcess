import React, { useEffect, useState } from "react";
import { getLeadById } from "../../utils/ApiFunctions";
import { useParams } from "react-router-dom";
import { SSection, STable, SThead, STbody, STr, SHead, STh, STd, STable2, SThead2, 
  STr2, STh2, STbody2, STd2 } from './styled';
import { useNavigate } from "react-router-dom";

const LeadInfo = () => {

  const [lead, setLead] = useState({
    id: "",
    secondName: "",
    firstName: "",
    patronymic: "",
    phoneNumber: "",
    user: [{ id: "", email: "" }],
    realEstateObjects: [{ id: "", name: "", type: "", price:"", square: "", address: "", yearOfConstruction: "" }]
})


const { leadId } = useParams()
const [errorMessage, setErrorMessage] = useState("")
const [successMessage, setSuccessMessage] = useState("")
const navigate = useNavigate();


useEffect(() => {
  fetchLead();
}, []);

const fetchLead = async () => {
  try {
      const leadData = await getLeadById(leadId)
      setLead(leadData)
  } catch (error) {
      console.error(error)
  }
}

const columns = ['№', 'Название', 'Тип', 'Цена', 'Площадь', 'Адрес', 'Год постройки'];

  return (
    <SSection>
      <STable>
        <SThead>
          <STr>
            <SHead colspan="2">Информация о потенциальном клиенте</SHead>
          </STr>
        </SThead>
        <STbody>
          <STr>
            <STh>ID</STh>
            <STd>{lead.id}</STd>
          </STr>
          <STr>
            <STh>Фамилия</STh>
            <STd>{lead.secondName}</STd>
          </STr>
          <STr>
            <STh>Имя</STh>
            <STd>{lead.firstName}</STd>
          </STr>
          <STr>
            <STh>Отчество</STh>
            <STd>{lead.patronymic}</STd>
          </STr>
          <STr>
            <STh>Телефон</STh>
            <STd>{lead.phoneNumber}</STd>
          </STr>
          <STr>
            <STh>Email</STh>
            <STd>{lead.user.email}</STd>
          </STr>
        </STbody>
      </STable>

      <h2>Объекты недвижимости</h2>
      {lead.realEstateObjects.length > 0 ? (
        <STable2>
          <SThead2>
                <STr2>
                    {columns.map((column) => (
                        <STh2 key={column}>{column}</STh2>
                    ))}
                </STr2> 
            </SThead2>
          <STbody2>
            {lead.realEstateObjects.map((object, index) => (
              <STr2 key={object.id}>
                <STd2 key={index}>{index+1}</STd2>
                <STd2>{object.name}</STd2>
                <STd2>{object.type}</STd2>
                <STd2>{object.price}</STd2>
                <STd2>{object.square}</STd2>
                <STd2>{object.address}</STd2>
                <STd2>{object.yearOfConstruction}</STd2>
              </STr2>
            ))}
          </STbody2>
        </STable2>
      ) : (
        <p>Нет объектов недвижимости для отображения.</p>
      )}

    </SSection>
  );
};

export default LeadInfo;