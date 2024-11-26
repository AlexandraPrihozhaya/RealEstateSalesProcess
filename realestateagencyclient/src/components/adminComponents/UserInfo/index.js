import React, { useEffect, useState } from "react";
import { getUserById } from "../../utils/ApiFunctions";
import { useParams } from "react-router-dom";
import { SSection } from './styled';
import { SButtonModal } from "../AdminInfo/styled";

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

<table className="tablemy">
<thead className="theadmy">
    <tr>
      <th className="head" colspan="2">Информация о пользователе</th>
    </tr>
  </thead>
  <tbody className="tdbodymy">
    <tr className="trmy">
      <th className="thmy">ID</th>
      <td className="tdmy">{user.id}</td>
    </tr>
    <tr className="trmy">
      <th className="thmy">Email</th>
      <td className="tdmy">{user.email}</td>
    </tr>
    <tr className="trmy">
      <th className="thmy">Роли</th>
      <td className="tdmy">
        <ul className="user-roles">
          {user.roles.map((role) => (
            <li key={role.id}>
              {role.name === "ROLE_USER" && (
                <text>Пользователь</text>
                )}
              {role.name === "ROLE_MANAGER" && (
                <text>Менеджер</text>
                )}
              {role.name === "ROLE_ADMIN" && (
                <text>Администратор</text>
                )}
            </li>
          ))}
        </ul>
      </td>
    </tr>
    <tr className="trmy">
      <th className="thmy">Действия</th>
      <td className="tdmy">
      <button className="btn">Изменить</button>
      <button className="btn">Удалить</button>
      </td>
    </tr>
  </tbody>
</table>
      </SSection>
  );
};

export default UserInfo;