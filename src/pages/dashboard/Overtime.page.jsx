import OvertimeComponent from '../../components/overtime/Overtime.component';
import Sidebar from '../../components/sidebar/Sidebar.component';

function OvertimePage() {
  return (
    <>
      <Sidebar children={<OvertimeComponent />} />
    </>
  );
}

export default OvertimePage;
