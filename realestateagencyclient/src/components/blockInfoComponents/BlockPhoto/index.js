import React from 'react';
import { SDiv, SFaHandHoldingHeart, SH1 } from './styled';

const BlockPhoto = ({ photoUrl, name }) => {
  return (
    <SDiv picture={photoUrl}>
        <SH1>{name}</SH1>
        <SFaHandHoldingHeart />
    </SDiv>
  );
};

export default BlockPhoto;