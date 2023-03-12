import BreadcrumpComponent from '../../../components/breadcrump/Breadcrump.component';
import ShowHistoryOvertime from '../../../components/overtime/ShowHistoryOvertime.component';
import Sidebar from '../../../components/sidebar/Sidebar.component';

function OvertimeHistoryPage() {
  return (
    <>
      <Sidebar
        children={
          <>
            <BreadcrumpComponent />
            <ShowHistoryOvertime />
          </>
        }
      />
    </>
  );
}

export default OvertimeHistoryPage;
