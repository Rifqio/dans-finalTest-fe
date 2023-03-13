import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar.component';
import ShowAllReimbursment from '../../../components/reimbursment/ShowAllReimbursment.component';
import BreadcrumpComponent from '../../../components/reimbursment/Breadcrump.component';

function ShowAllReimbursmentPage() {
  return (
    <div>
      <Sidebar
        children={
          <>
            <BreadcrumpComponent />
            <ShowAllReimbursment />
          </>
        }
      />
    </div>
  );
}

export default ShowAllReimbursmentPage;
