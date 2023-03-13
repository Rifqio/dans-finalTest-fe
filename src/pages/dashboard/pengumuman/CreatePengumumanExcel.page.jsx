import CreatePengumumanExcel from '../../../components/pengumuman/CreatePengumumanExcel.component';
import Sidebar from '../../../components/sidebar/Sidebar.component';

function CreatePengumumanExcelPage() {
  return (
    <div>
      <Sidebar children={<CreatePengumumanExcel />} />
    </div>
  );
}

export default CreatePengumumanExcelPage;
