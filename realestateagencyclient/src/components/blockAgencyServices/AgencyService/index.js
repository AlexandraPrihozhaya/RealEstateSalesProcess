import React from 'react';
import { SDiv, SImage, SH3 } from './styled';

const AgencyService = ({ photoUrl, name}) => {
  return (
    <SDiv>
    <SImage src={photoUrl} alt="Time"/>
    <SH3>
      {name}
    </SH3>
  </SDiv>
  );
};

export default AgencyService;