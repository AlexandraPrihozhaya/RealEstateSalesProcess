import styled from 'styled-components';

export const SSection = styled.section`
  background-color: #ffffff;
  padding: 0 200px 60px 200px;
  text-align: center;
`;

export const SH1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const SDivServices = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 20px;
`;

export const SDivService = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0 1px 4px #8b8b8b;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 1px 4px #ff8a00;
  }
`;

export const SDivImage = styled.div`
  width: 30%;
  margin-right: 10px;
`;

export const SImg = styled.img`
  width: 50%;
`;

export const SDivContent = styled.div`
  width: 70%;
`;

export const SH3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SP = styled.p` 
  line-height: 1.4;
`;