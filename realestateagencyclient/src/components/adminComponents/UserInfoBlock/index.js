import React from 'react';
import MenuAdmin from '../../headerComponents/MenuAdmin';
import UserInfo from '../UserInfo';
import { SSection } from './styled';

const UserInfoBlock = () => {

  return (
      <SSection>
            <MenuAdmin />
            <UserInfo />
      </SSection>
  );
};

export default UserInfoBlock;