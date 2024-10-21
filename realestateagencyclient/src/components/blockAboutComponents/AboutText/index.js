import React from 'react';
import { SDiv, SH1, SDivText } from './styled';
import Accordion from '../Accordion';

const AboutText = () => {
  return (
    <SDiv>
      <SDivText>
            <SH1>Часто задаваемые вопросы</SH1>
            <Accordion />
        </SDivText>
    </SDiv>
  );
};

export default AboutText;