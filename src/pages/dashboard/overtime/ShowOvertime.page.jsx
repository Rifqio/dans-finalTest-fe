import BreadcrumpComponent from '../../../components/breadcrump/Breadcrump.component'
import ShowAllOvertime from '../../../components/overtime/ShowAllOvertime.component';
import Sidebar from '../../../components/sidebar/Sidebar.component';

function ShowOvertimePage() {
  return (
    <div>
      <Sidebar
        children={
          <>
            <BreadcrumpComponent />
            <ShowAllOvertime />
          </>
        }
      />
    </div>
  );
}

export default ShowOvertimePage;
