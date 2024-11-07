import React from 'react';
import {SSection, SH1, SP} from './styled';


const HelloHeader = ({ title, text }) => {
  return (
    <SSection>
      <SH1>{title}</SH1>
      <SP>{text}</SP>
    </SSection>
  );
};

export default HelloHeader;