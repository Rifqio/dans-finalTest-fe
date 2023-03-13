import BreadcrumpComponent from '../../../components/reimbursment/Breadcrump.component';
import ShowHistoryReimbursment from '../../../components/reimbursment/ShowHistoryReimbursment.component';
import Sidebar from '../../../components/sidebar/Sidebar.component';

function ShowHistoryReimbursmentPage() {
  return (
    <div>
      <Sidebar
        children={
          <>
            <BreadcrumpComponent />
            <ShowHistoryReimbursment />
          </>
        }
      />
    </div>
  );
}

export default ShowHistoryReimbursmentPage;
