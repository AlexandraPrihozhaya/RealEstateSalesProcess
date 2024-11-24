import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 200px 40px 200px;
  background-color: #f5f5f5;
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
`;

export const SH3 = styled.h3`

`;

export const SText = styled.text`

`;

export const SStars = styled.div`
  margin-bottom: 20px;
`;
