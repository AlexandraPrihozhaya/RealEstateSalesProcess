import React, { useEffect, useState } from "react";
import { getRealtorById } from "../../utils/ApiFunctions";
import { useParams } from "react-router-dom";
import { SSection, STable, SThead, STbody, STr, SHead, STh, STd, SButton } from './styled';
import { deleteRealtor, changeRealtor } from '../../utils/ApiFunctions';
import { useNavigate } from "react-router-dom";

const RealtorInfo = () => {

  const [realtor, setRealtor] = useState({
    id: "",
    secondName: "",
    firstName: "",
    patronymic: "",
    phoneNumber: "",
    user: {id: "", email: ""}
})


const { realtorId } = useParams()
const [errorMessage, setErrorMessage] = useState("")
const [successMessage, setSuccessMessage] = useState("")
const navigate = useNavigate();



const fetchRealtor = async () => {
  try {
      const realtorData = await getRealtorById(realtorId)
      setRealtor(realtorData)
  } catch (error) {
      console.error(error)
  }
}


useEffect(() => {
  fetchRealtor()
}, [realtorId])




const handleDelete = async (realtorId) => {
    try {
      const result = await deleteRealtor(realtorId);
      if (result === "Realtor deleted successfully") {
        setSuccessMessage(
          `Риэлтор с id ${realtorId} был удален`
        );
        navigate("/admin/realtors");
      } else {
        console.error(`Error deleting realtor : ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };


  return (
    <SSection>
      <STable>
        <SThead>
          <STr>
            <SHead colspan="2">Информация о риэлторе</SHead>
          </STr>
        </SThead>
        <STbody>
          <STr>
            <STh>ID</STh>
            <STd>{realtor.id}</STd>
          </STr>
          <STr>
            <STh>Фамилия</STh>
            <STd>{realtor.secondName}</STd>
          </STr>
          <STr>
            <STh>Имя</STh>
            <STd>{realtor.firstName}</STd>
          </STr>
          <STr>
            <STh>Отчество</STh>
            <STd>{realtor.patronymic}</STd>
          </STr>
          <STr>
            <STh>Email</STh>
            <STd>{realtor.user.email}</STd>
          </STr>
          <STr>
            <STh>Телефон</STh>
            <STd>{realtor.phoneNumber}</STd>
          </STr>
          <STr>
            <STh>Действия</STh>
            <STd>
              <SButton>Изменить</SButton>
              <SButton onClick={() => handleDelete(realtor.id)}>Удалить</SButton>
            </STd>
          </STr>
        </STbody>
      </STable>
    </SSection>
  );
};

export default RealtorInfo;