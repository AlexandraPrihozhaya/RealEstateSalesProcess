import styled from 'styled-components';

export const SSection = styled.section`
  background-color: #ffffff;
  display: flex;
  padding: 0 0 40px 0;
  align-items: center;
  margin: 0 200px;
  flex-direction: column;
`;

export const SH1 = styled.h1`
    font-size: 40px;
`;

export const SSpan = styled.span`
    color: #ff8a00;
    text-transform: uppercase;
`;

export const SDivAdvantages = styled.div`
 
`;

export const SDivAdvantage = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  /* border: 1px solid #ddd; */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const SDivContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const SDivImage = styled.div`
  width: 250px;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.photoUrl});
`;

export const SH2 = styled.h2`
  
`;

export const SP = styled.p`
  line-height: 1.6;
`;

