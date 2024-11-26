import React from 'react';
import MenuAdmin from '../../headerComponents/MenuAdmin';
import AdminInfo from '../AdminInfo';
import { SSection } from './styled';

const AdminBlock = () => {

  return (
      <SSection>
            <MenuAdmin />
            <AdminInfo />
      </SSection>
  );
};

export default AdminBlock;