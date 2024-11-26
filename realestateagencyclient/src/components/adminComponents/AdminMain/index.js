import React from 'react';
import MenuAdmin from '../../headerComponents/MenuAdmin';
import { SSection } from './styled';
import AdminMainBlock from '../AdminMainBlock';

const AdminMain = () => {

  return (
      <SSection>
          <MenuAdmin />
          <AdminMainBlock />
      </SSection>
  );
};

export default AdminMain;