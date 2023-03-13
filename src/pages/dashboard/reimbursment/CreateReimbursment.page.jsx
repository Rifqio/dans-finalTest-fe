import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar.component';
import CreateReimbursmentForm from '../../../components/reimbursment/CreateReimbursmentForm';

function CreateReimbursmentPage() {
  return (
    <div>
      <Sidebar children={<CreateReimbursmentForm />} />
    </div>
  );
}

export default CreateReimbursmentPage;
