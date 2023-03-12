import PengumumanComponent from '../../../components/pengumuman/Pengumuman.component';
import Sidebar from '../../../components/sidebar/Sidebar.component';

function PengumumanPage() {
  return (
    <>
      <Sidebar children={<PengumumanComponent />} />
    </>
  );
}

export default PengumumanPage;
