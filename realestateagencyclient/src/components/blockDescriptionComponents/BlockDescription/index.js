import React from 'react';
import { SSection } from './styled';
import DescPhoto from '../DescPhoto';
import DescText from '../DescText';

const BlockDescription = () => {
  return (
    <SSection>
      <DescPhoto />
      <DescText />
    </SSection>
  );
};

export default BlockDescription;