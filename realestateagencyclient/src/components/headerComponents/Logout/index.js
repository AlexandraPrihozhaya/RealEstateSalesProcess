import React, { useContext } from "react"
import { AuthContext } from "../../auth/AuthProvider"
import {useNavigate } from "react-router-dom"
import { SADiv, SExit, SIoMdExit, SHr } from "./styled"

const Logout = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.handleLogout()
    navigate("/", { state: { message: " You have been logged out!" } })
  }

  return (
    <>
      <SADiv href="/profile">
        Профиль
      </SADiv>  
      <SHr/>
            <SADiv onClick={handleLogout}>
        <SExit>Выход <SIoMdExit /></SExit>
      </SADiv>
    </>
  )
}

export default Logout