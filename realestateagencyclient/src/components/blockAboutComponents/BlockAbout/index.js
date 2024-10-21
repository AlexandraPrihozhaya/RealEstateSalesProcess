import React from 'react';
import { SSection } from './styled';
import AboutPhoto from '../AboutPhoto';
import AboutText from '../AboutText';

const BlockAbout = () => {
  return (
    <SSection>
      <AboutText />
      <AboutPhoto />
    </SSection>
  );
};

export default BlockAbout;