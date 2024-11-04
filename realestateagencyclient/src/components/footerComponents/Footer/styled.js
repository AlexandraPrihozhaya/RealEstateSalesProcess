import styled from 'styled-components';


export const SSection = styled.section`
  background-color: #484848;
  color: #fff;
  padding: 20px 200px;
  align-items: center;
`;

export const SDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 20px 0 60px 0;
`;

export const SCol = styled.div`
  
`;

export const SImage = styled.img`
  max-width: 150px;
`;

export const SH4 = styled.h4`
  margin-top: 0;
`;

export const SLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SLi = styled.li`
  margin-bottom: 10px;
`;

export const SA = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: flex-end; 
    text-align: right;
`;

export const SInput = styled.input`
    background: #fff;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
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


export const SP = styled.p`
  text-align: center;  
`;


export const SALogo = styled.a`

`;