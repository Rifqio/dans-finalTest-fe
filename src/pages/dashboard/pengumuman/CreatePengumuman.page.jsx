import CreatePengumumanForm from '../../../components/pengumuman/CreatePengumuman.component';
import Sidebar from '../../../components/sidebar/Sidebar.component';

function CreatePengumumanPage() {
  return (
    <div>
      <Sidebar children={<CreatePengumumanForm />} />
    </div>
  );
}

export default CreatePengumumanPage;
