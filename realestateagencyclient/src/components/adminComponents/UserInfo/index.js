import React, { useEffect, useState } from "react";
import { getUserById } from "../../utils/ApiFunctions";
import { useParams } from "react-router-dom";
import { SSection, STable, SThead, STbody, STr, SHead, STh, STd, SUl, SLi, SText, SButton } from './styled';

const UserInfo = () => {

  const [user, setUser] = useState({
    id: "",
    email: "",
    roles: [{ id: "", name: "" }]
})


const { userId } = useParams()



useEffect(() => {
    const fetchUser = async () => {
        try {
            const userData = await getUserById(userId)
            setUser(userData)
        } catch (error) {
            console.error(error)
        }
    }

    fetchUser()
}, [userId])


  return (
    <SSection>
      <STable>
        <SThead>
          <STr>
            <SHead colspan="2">Информация о пользователе</SHead>
          </STr>
        </SThead>
        <STbody>
          <STr>
            <STh>ID</STh>
            <STd>{user.id}</STd>
          </STr>
          <STr>
            <STh>Email</STh>
            <STd>{user.email}</STd>
          </STr>
          <STr>
            <STh>Роли</STh>
            <STd>
              <SUl>
                {user.roles.map((role) => (
                  <SLi key={role.id}>
                    {role.name === "ROLE_USER" && (
                      <SText>Пользователь</SText>
                      )}
                    {role.name === "ROLE_REALTOR" && (
                      <SText>Риэлтор</SText>
                      )}
                    {role.name === "ROLE_ADMIN" && (
                      <SText>Администратор</SText>
                      )}
                  </SLi>
                ))}
              </SUl>
            </STd>
          </STr>
          <STr>
            <STh>Действия</STh>
            <STd>
              <SButton>Изменить</SButton>
              <SButton>Удалить</SButton>
            </STd>
          </STr>
        </STbody>
      </STable>
    </SSection>
  );
};

export default UserInfo;