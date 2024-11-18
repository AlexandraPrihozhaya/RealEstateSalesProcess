import styled from 'styled-components';
import { FaFacebookF, FaGoogle, FaVk } from "react-icons/fa";
import overlay from "D:/Документы/БГУИР/8 сем/дипломный проект/RealEstateSalesProcess/realestateagencyclient/src/assets/overlaydiv.jpg"

export const SFormContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all .6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 2;

    transform: ${(props) => (props.isSignUp ? `translateY(100%)` : ``)};
`;

export const SFormContainerUp = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all .6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;

    transform: ${(props) => (props.isSignUp ? `translateX(100%)` : ``)};
    opacity: ${(props) => (props.isSignUp ? 1 : ``)};
    z-index: ${(props) => (props.isSignUp ? 5 : ``)};
`;

export const SForm = styled.form`
    background: #fff;
    display: flex;
    flex-direction: column;
    padding:  0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const SH1 = styled.h1` 
    font-weight: bold;
    margin: 0;
`;

export const SSocialDiv = styled.div`
    margin: 20px 0;
`;

export const SASocial = styled.a`
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
`;

export const SFaFacebookF = styled(FaFacebookF)`
    color: #ff8a00; 
`;

export const SFaGoogle = styled(FaGoogle)`
    color: #ff8a00; 
`;

export const SFaVk = styled(FaVk)`
    color: #ff8a00; 
`;

export const SSpan = styled.span`
    font-size: 14px;
`;

export const SInput = styled.input`
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 60%;
`;

export const SA = styled.a`
    color: #333;
    font-size: 14px;
    text-decoration: none;
`;

export const SButton = styled.button`
    border-radius: 10px;
    border: 1px solid #ff8a00;
    background: #ff8a00;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin: 15px 0;

    &:active {
        transform: scale(.95);
    }

    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
    
`;

export const SOverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .6s ease-in-out;
    z-index: 100;

    transform: ${(props) => (props.isSignUp ? `translateX(-100%)` : ``)};
`;

export const SOverlayDiv = styled.div`
    background-image: url(${overlay});
    background-size: cover;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateY(0);
    transition: transform .6s ease-in-out;

    transform: ${(props) => (props.isSignUp ? `translateX(50%)` : ``)};
`;

export const SOverlayPanelLeft = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateY(0);
    transition: transform .6s ease-in-out;
    transform: translateY(-20%);

    transform: ${(props) => (props.isSignUp ? `translateY(0)` : ``)};
`;

export const SOverlayPanelRight = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateY(0);
    transition: transform .6s ease-in-out;
    right: 0;
    transform: translateY(0);

    transform: ${(props) => (props.isSignUp ? `translateX(20%)` : ``)};
`;



export const SP = styled.p`
    font-size: 16px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: .5px;
    margin: 20px 0 30px;
`;

export const SButtonGhost = styled.button`
    border-radius: 10px;
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    &:active {
        transform: scale(.95);
    }

    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const SSection = styled.div`
    background: #fff;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
`;


export const SALogo = styled.a`

`;

export const SImage = styled.img`
  height: 64px;
`;

export const SMessage = styled.text`
  font-size: 18px;
  font-weight: 500;
  color: #c45200;
`;