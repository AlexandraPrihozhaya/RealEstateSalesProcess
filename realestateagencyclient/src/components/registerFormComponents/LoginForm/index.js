import React, { useState, useEffect } from 'react';
import { SFormContainer, SForm, SH1, SSocialDiv, 
  SASocial, SFaGoogle, SFaFacebookF, SFaVk, 
  SSpan, SInput, SA, SButton, SOverlayContainer, 
  SOverlayDiv, SOverlayPanelLeft, SOverlayPanelRight, 
  SP, SButtonGhost, SSection, SFormContainerUp, SALogo, SImage } from './styled';
import logo from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/logo1.png"
import { Tooltip } from 'react-tooltip'
    

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


  return (
    <SSection>
    <SFormContainerUp isSignUp={isSignUpMode}>
      <SForm>
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
        <SInput type="email" placeholder="Email" />
        <SInput type="password" placeholder="Пароль" />
        <SButton>Зарегистрироваться</SButton>
      </SForm>
    </SFormContainerUp>
    <SFormContainer isSignUp={isSignUpMode}>
      <SForm>
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
        <SInput type="email" placeholder="Email" />
        <SInput type="password" placeholder="Пароль" />
        <SA href="#">Забыли пароль?</SA>
        <SButton>Войти</SButton>
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
