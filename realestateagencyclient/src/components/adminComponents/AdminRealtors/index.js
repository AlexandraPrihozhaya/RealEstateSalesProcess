import React from 'react';
import MenuAdmin from '../../headerComponents/MenuAdmin';
import { SSection } from './styled';
import AdminRealtorsTable from '../AdminRealtorsTable';

const AdminRealtors = () => {

  return (
      <SSection>
            <MenuAdmin />
            <AdminRealtorsTable />
      </SSection>
  );
};

export default AdminRealtors;