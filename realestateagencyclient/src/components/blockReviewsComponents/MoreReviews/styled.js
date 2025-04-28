import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 200px 30px 200px;
  background-color: #ffffff;
  // background: linear-gradient(135deg, #ebebeb,  #d15a5a);
`;

export const SButton = styled.button`
  background: none;
  border: none;
  margin: 20px;
  cursor: pointer;
  font-size: 20px;
`;

export const SDivReview = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #ff8a00;
  // font-size:24px;
`;

export const SH3 = styled.h3`

`;

export const SDivText = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const SText = styled.text`

`;

export const SStars = styled.div`
  margin-bottom: 20px;
`;