import Pengumuman from '../../components/pengumuman/LatestPengumuman.component';
import Sidebar from '../../components/sidebar/Sidebar.component';

function HomePage() {
  return (
    <>
      <Sidebar children={<Pengumuman />} />
    </>
  );
}

export default HomePage;
