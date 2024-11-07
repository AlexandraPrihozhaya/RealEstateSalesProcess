import styled from 'styled-components';


export const SSection = styled.section`
  background-color: #fff;
  padding: 0 200px 40px 200px;
  align-items: center;
  flex-direction: column;
`;

export const SH1 = styled.h1`
    font-size: 40px;
    color: #000;
`;

export const SButton = styled.button`
    display: flex;
    align-items: center;
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;

    &:hover {
        background-color: #ccc;
    }

    &:after {
        color: #777;
        font-weight: bold;
        float: right;
        margin-left: 5px;
    }
`;

export const SPanel = styled.div`
    padding: 0 18px;
    background-color: white;
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
`;

export const SText = styled.p`

`;


