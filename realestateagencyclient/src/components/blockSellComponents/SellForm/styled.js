import styled from 'styled-components';

export const SSection = styled.div`
    background: #ebebeb;
    padding-bottom:  50px;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    text-align: center;
`;

export const SForm = styled.form`
    background: #ebebeb;   
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const SInput = styled.input`
    background: #fff;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 20%;
    margin: 5px 0;
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

export const SH1 = styled.h1`
    font-size: 40px;
`;