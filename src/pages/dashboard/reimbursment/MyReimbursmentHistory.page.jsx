import BreadcrumpComponent from '../../../components/reimbursment/Breadcrump.component';
import MyHistoryReimbursment from '../../../components/reimbursment/MyHistoryReimbursment.component';
import Sidebar from '../../../components/sidebar/Sidebar.component';

function MyHistoryReimbursmentPage() {
  return (
    <div>
      <Sidebar
        children={
          <>
            <MyHistoryReimbursment />
          </>
        }
      />
    </div>
  );
}

export default MyHistoryReimbursmentPage;
