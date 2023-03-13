import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar.component';
import ReimbursmentDetailComponent from '../../../components/reimbursment/ReimbursmentDetail.component';

function ReimbursmentDetailPage() {
  return (
    <div>
      <Sidebar children={<ReimbursmentDetailComponent />} />
    </div>
  );
}

export default ReimbursmentDetailPage;
