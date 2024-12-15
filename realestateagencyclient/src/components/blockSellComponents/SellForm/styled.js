import styled from 'styled-components';

export const SSection = styled.div`
    background: #ebebeb;
    padding-bottom:  20px;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    text-align: center;
`;

export const SFormData = styled.div`
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
    width: 100%;
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
    font-size: 36px;
`;

export const SH2 = styled.h2`
    font-size: 28px;
`;

export const SForm = styled.form`
    padding: 0 30px 20px 30px;
`;

export const SFormDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 15px;
    row-gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
    
    @media (min-width: 800px) and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const SFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const SLabel = styled.label`
    font-size: 16px;
    display: block;
    text-align: start;
`;

export const SSelect = styled.select`
    width: 100%;
    border: 1px solid #ccc;
    background: #fff;
    padding: 12px 15px;
`;

export const SFormInput = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SOption = styled.option`

`;

export const STextarea = styled.textarea`
    height: 60px;
    background: #fff;
    border: none;
    padding: 12px 15px;
`;

export const SDivInput = styled.div`
    margin-bottom: 10px;
`;
