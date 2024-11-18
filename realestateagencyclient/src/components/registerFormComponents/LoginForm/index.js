import React, { useState, useEffect } from 'react';
import { SFormContainer, SForm, SH1, SSocialDiv, 
  SASocial, SFaGoogle, SFaFacebookF, SFaVk, 
  SSpan, SInput, SA, SButton, SOverlayContainer, 
  SOverlayDiv, SOverlayPanelLeft, SOverlayPanelRight, 
  SP, SButtonGhost, SSection, SFormContainerUp, SALogo, SImage, SMessage } from './styled';
import logo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/logo1.png"
import { Tooltip } from 'react-tooltip'
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from '../../auth/AuthProvider'
import { registerUser, loginUser } from '../../utils/ApiFunctions';
    

const LoginForm = () => {

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => setIsSignUpMode(true);
  const handleSignInClick = () => setIsSignUpMode(false);

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () =>
        container.classList.add('right-panel-active')
      );

      signInButton.addEventListener('click', () =>
        container.classList.remove('right-panel-active')
      );
    }

    return () => {
      // Очистка обработчиков событий при размонтировании компонента
      if (signUpButton && signInButton && container) {
        signUpButton.removeEventListener('click', () =>
          container.classList.add('right-panel-active')
        );
        signInButton.removeEventListener('click', () =>
          container.classList.remove('right-panel-active')
        );
      }
    };
  }, []);


  const [errorMessageLogin, setErrorMessageLogin] = useState("")
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()
  const auth = useAuth()
  const location = useLocation()
  const redirectUrl = location.state?.path || "/"

  const handleInputChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const success = await loginUser(login)
    if (success) {
      const token = success.token
      auth.handleLogin(token)
      navigate(redirectUrl, { replace: true })
    } else {
      setErrorMessageLogin("Неверный email или пароль. Пожалуйста, попробуйте еще раз.")
    }
    setTimeout(() => {
      setErrorMessageLogin("")
    }, 4000)
  }



  const [registration, setRegistration] = useState({
    email: "",
    password: ""
  })

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChangeReg = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value })
  }

  const handleRegistration = async (e) => {
    e.preventDefault()
    try {
      const result = await registerUser(registration)
      setSuccessMessage("Вы успешно зарегистрировались")
      setErrorMessage("")
      setRegistration({ email: "", password: "" })
    } catch (error) {
      setSuccessMessage("")
      setErrorMessage(`Ошибка регистрации: ${error.message}`)
    }
    setTimeout(() => {
      setErrorMessage("")
      setSuccessMessage("")
    }, 5000)
  }


  return (
    <SSection>
    <SFormContainerUp isSignUp={isSignUpMode}>
      <SForm onSubmit={handleRegistration}>
      <SALogo href='/' data-tooltip-id="onmain">
        <SImage src={logo}/>
      </SALogo>
      <Tooltip id="onmain">На главную</Tooltip>
        <SH1>Создать аккаунт</SH1>
        <SSocialDiv>
          <SASocial href="#"><SFaFacebookF></SFaFacebookF></SASocial>
          <SASocial href="#"><SFaGoogle></SFaGoogle></SASocial>
          <SASocial href="#"><SFaVk></SFaVk></SASocial>
        </SSocialDiv>
        <SSpan>или используйте свой аккаунт</SSpan>
        <SInput id="emailReg" name="email" type="email" placeholder="Email" value={registration.email} onChange={handleInputChangeReg}/>
        <SInput id="passwordReg" name="password" type="password" placeholder="Пароль" value={registration.password} onChange={handleInputChangeReg}/>
        <SButton type='submit'>Зарегистрироваться</SButton>
        <SMessage>{successMessage}</SMessage>
      </SForm>
    </SFormContainerUp>
    <SFormContainer isSignUp={isSignUpMode}>
      <SForm onSubmit={handleLogin}>
      <SALogo href='/' data-tooltip-id="onmain">
        <SImage src={logo}/>
      </SALogo>
      <Tooltip id="onmain">На главную</Tooltip>
        <SH1>Войти</SH1>
        <SSocialDiv>
          <SASocial href="#"><SFaFacebookF></SFaFacebookF></SASocial>
          <SASocial href="#"><SFaGoogle></SFaGoogle></SASocial>
          <SASocial href="#"><SFaVk></SFaVk></SASocial>
        </SSocialDiv>
        <SSpan>или используйте свой аккаунт</SSpan>
        <SInput id="emailLogin" name="email" type="email" placeholder="Email" value={login.email} onChange={handleInputChangeLogin}/>
        <SInput id="passwordLogin" name="password" type="password" placeholder="Пароль" value={login.password} onChange={handleInputChangeLogin}/>
        <SA href="#">Забыли пароль?</SA>
        <SButton type='submit'>Войти</SButton>
      </SForm>
    </SFormContainer>
    <SOverlayContainer isSignUp={isSignUpMode}>
        <SOverlayDiv isSignUp={isSignUpMode}>
            <SOverlayPanelLeft isSignUp={isSignUpMode}>
                <SH1>С возвращением</SH1>
                <SP>Есть аккаунт?</SP>
                <SButtonGhost id="signIn" onClick={handleSignInClick}>Войти</SButtonGhost>
            </SOverlayPanelLeft>
            <SOverlayPanelRight isSignUp={isSignUpMode}>
                <SH1>Здравствуйте</SH1>
                <SP>Нет аккаунта?</SP>
                <SButtonGhost id="signUp" onClick={handleSignUpClick}>Зарегистрироваться</SButtonGhost>
            </SOverlayPanelRight>
        </SOverlayDiv>
    </SOverlayContainer>
    </SSection>
  );
};

export default LoginForm;
