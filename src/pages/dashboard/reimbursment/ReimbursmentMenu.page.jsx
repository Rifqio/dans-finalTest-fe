import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar.component';
import ReimbursmentMenuComponent from '../../../components/reimbursment/ReimbursmentMenu.component';

function ReimbursmentMenuPage() {
  return (
    <div>
      <Sidebar children={<ReimbursmentMenuComponent />} />
    </div>
  );
}

export default ReimbursmentMenuPage;
