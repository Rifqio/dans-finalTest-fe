import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar.component';
import ShowAllPengumuman from '../../../components/pengumuman/ShowAllPengumuman.component';

function ShowAllPengumumanPage() {
  return (
    <div>
      <Sidebar children={<ShowAllPengumuman />} />
    </div>
  );
}

export default ShowAllPengumumanPage;
