import React from 'react';
import { SSection, SA, SSpacer } from './styled';


const Menu = () => {
  return (
    <SSection>
      <SA href='/'>Home</SA>
      <SSpacer></SSpacer>
      <SA href='/'>Page 1</SA>
    </SSection>
  );
};

export default Menu;