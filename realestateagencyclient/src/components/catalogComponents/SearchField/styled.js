import styled from 'styled-components';

export const SSection = styled.section`
    padding: 30px 200px;
    background-color: #f5f5f5;
`;

export const SForm = styled.form`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 15px;
    row-gap: 20px;

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
`;

export const SSelect = styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
`;

export const SFormInput = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SOption = styled.option`

`;

export const SInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
`;

export const SButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #ff8a00;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
`;